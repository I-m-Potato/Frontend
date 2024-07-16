import axios from 'axios';

 const instance = axios.create({
     baseURL: process.env.REACT_APP_BACK_API,
     withCredentials: true,
 });


export const apiNewDiary =
    (info) => axios.post('http://172.16.4.191:3001/api/new-diary',info);

export const apiGetDiary = 
(id,date) => axios.get('http://172.16.4.191:3001/api/get-diary',{
    params: {
        id: id,
        date: date
    }
});
export const apiGetProfile =
(id) => axios.get('http://172.16.4.191:3001/api/profile',{
    params:{
        id: id
    }
});

export const apiReviseInfo = 
(id,info) => axios.patch('http://172.16.4.191:3001/api/profile/edit',{
    params:{
        id: id,
        name: info.name,
        password: info.password
    }
})