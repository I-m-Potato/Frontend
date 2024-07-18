import axios from 'axios';

 const instance = axios.create({
     baseURL: process.env.REACT_APP_BACK_API,
     withCredentials: true,
 });

export const url= 'http://172.16.65.160:3001';

//export const apiNewDiary =
//    (info) => axios.post('http://172.16.4.191:3001/api/new-diary',info);

export const apiNewDiary =
    (info) => axios.post(`${url}/api/new-diary`,info);
export const apiGetDiary = 
(id,date) => axios.get(`${url}/api/get-diary`,{
    params: {
        id: id,
        date: date
    }
});
export const apiGetProfile =
(id) => axios.get(`${url}/api/profile`,{
    params:{
        id: id
    }
});

export const apiReviseInfo = 
(id,info) => axios.patch(`${url}/api/profile/edit`,{
    params:{
        id: id,
        name: info.name,
        password: info.password
    }
})