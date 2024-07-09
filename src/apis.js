import axios from 'axios';

 const instance = axios.create({
     baseURL: process.env.REACT_APP_BACK_API,
     withCredentials: true,
 });


export const apiNewDiary =
    (info) => instance.post('/api/new-diary',info);

export const apiGetDiary = 
(id,date) => instance.get('/api/get-diary',{
    id:id,
    date: date
});