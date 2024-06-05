const express = require('express');
const axios = require('axios');
const mysql = require('mysql');
const app = express();
const port = 3001;

const spotifyClientId = 'b7b1b4df41164101833d4da6d993bef1';
const spotifyClientSecret = '4db50fd8b5254f7eb7b9749c6101b9b9';

// MySQL 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'yourdatabase'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Spotify 토큰 가져오기
const getSpotifyToken = async () => {
  const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
    headers: {
      'Authorization': 'Basic ' + Buffer.from(spotifyClientId + ':' + spotifyClientSecret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  return response.data.access_token;
};

// 추천 노래 가져오기
app.get('/api/spotify-recommendations', async (req, res) => {
  const emotion = req.query.emotion;
  const token = await getSpotifyToken();

  const response = await axios.get('https://api.spotify.com/v1/recommendations', {
    headers: {
      'Authorization': 'Bearer ' + token
    },
    params: {
      seed_genres: emotion === '매우 좋음' ? 'happy' : emotion === '조금 좋음' ? 'pop' : emotion === '조금 나쁨' ? 'sad' : 'acoustic'
    }
  });

  const songs = response.data.tracks.map(track => ({
    name: track.name,
    artist: track.artists[0].name,
    albumCover: track.album.images[0].url // 앨범 커버 이미지 URL
  }));

  res.json(songs);
});

// 추천 활동 가져오기
app.get('/api/activities', (req, res) => {
  const emotion = req.query.emotion;

  const query = `SELECT name FROM activities WHERE emotion = ?`;
  db.query(query, [emotion], (err, results) => {
    if (err) {
      res.status(500).send(err);
    }
    const activities = results.map(row => row.name);
    res.json(activities);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
