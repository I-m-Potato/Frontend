import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useLogin(){
    // 토큰 값을 가지고 로그인을 했나 안했나 확인하는 함수
    const navigate = useNavigate();
    useEffect(()=>{
        if(!sessionStorage.getItem('token')){
            alert('로그인이 필요한 페이지입니다!')
            navigate('/login');
        }
    },[]);
}

export default useLogin;