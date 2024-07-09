import axios from 'axios';
const instance = axios.create({
    baseURL:process.env.REACT_APP_BACK_API,
    withCredentials:true,
});

export const apiCreateDiary =
(info, token) => instance.post('/api/new-diary',info,{
    headers:{
        Authorization:token
    }
})
