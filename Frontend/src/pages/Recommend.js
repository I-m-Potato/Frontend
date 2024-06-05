import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'; // HTTP 요청을 위해 axios 사용

const Recommend = () => {
    const location = useLocation();
    const { emotion } = location.state || { emotion: '매우 좋음' }; // 기본값 설정
    const [songs, setSongs] = useState([]);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        // Spotify API를 사용하여 노래 추천 받기
        const fetchSongs = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/spotify-recommendations?emotion=${emotion}`);
                setSongs(response.data);
            } catch (error) {
                console.error("Error fetching songs:", error);
            }
        };

        // MySQL에서 활동 추천 받기
        const fetchActivities = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/activities?emotion=${emotion}`);
                setActivities(response.data);
            } catch (error) {
                console.error("Error fetching activities:", error);
            }
        };

        fetchSongs();
        fetchActivities();
    }, [emotion]);

    return (
        <RecommendContainer>
            <h1>추천</h1>
            <Section>
                <h2>추천 노래</h2>
                <SongList>
                    {songs.map((song, index) => (
                        <SongItem key={index}>
                            <AlbumCover src={song.albumCover} alt={`${song.name} album cover`} />
                            <SongInfo>
                                <SongName>{song.name}</SongName>
                                <ArtistName>{song.artist}</ArtistName>
                            </SongInfo>
                        </SongItem>
                    ))}
                </SongList>
            </Section>
            <Section>
                <h2>추천 활동</h2>
                <ul>
                    {activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>
            </Section>
        </RecommendContainer>
    );
};

export default Recommend;

const RecommendContainer = styled.div`
    width: 100%;
    padding: 20px;
    text-align: center;
    font-family: 'BMJua', sans-serif;
`;

const Section = styled.div`
    margin: 20px 0;
    h2 {
        font-size: 24px;
        color: #716656;
    }
    ul {
        list-style-type: none;
        padding: 0;
        li {
            margin: 10px 0;
            font-size: 18px;
        }
    }
`;

const SongList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SongItem = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 100%;
    max-width: 500px;
`;

const AlbumCover = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`;

const SongInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const SongName = styled.span`
    font-size: 18px;
    font-weight: bold;
`;

const ArtistName = styled.span`
    font-size: 16px;
    color: #555;
`;
