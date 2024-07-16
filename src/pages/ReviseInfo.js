import styled from "styled-components";
import { useState,useEffect} from "react";
import MypageBackground from '../images/Mypage.png';
import ThreePotato from '../images/Threepotato.png';
import { useNavigate } from "react-router-dom";
import { MypageMain,MypageContainer,MypageBtn,MypageInfo } from "./MyPage";
import useLogin from "../hooks/useLogin";
import { apiReviseInfo } from "../apis";

function ReviseInfo(){
    useLogin();
    const navigate = useNavigate();
    const [info, setInfo]=useState({
        name: '',
        password: '',
        confirmpw:''
    });
    const token = localStorage.getItem('userId');
    const handleChange = (e) => {
        const {name,value} = e.target;
        setInfo(prev=>({
            ...prev,
            [name]:value,
        }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!info.name || !info.password || !info.confirmpw) {
            alert('모든 필드를 입력해주세요.');
            return;
          }
        if (info.password !== info.confirmpw) {
            alert('비밀번호가 일치하지 않습니다.');
            window.location.reload();
        }
        else{
            apiReviseInfo(token,info)
            .then (response => {
                console.log(response.data);
            })
            .catch(error =>{
                alert(error);
            })
            alert('비밀번호가 성공적으로 변경되었습니다');
            navigate('/myPage');
        }
    }

    useEffect(()=>{
    window.scroll(0,0);
    },[]);
    
    return(
       <MypageMain>
            <img src={ThreePotato} />
            <MypageContainer>
                <MypageInfo as="input" type="text" name="name" value={info.name} onChange={handleChange} placeholder="수정할 닉네임을 입력해주세요!"/>
                <MypageInfo as="input" type="password" fontFamily="'Arial'" name="password" value={info.password} onChange={handleChange} placeholder="변경할 비밀번호를 입력해주세요!"/>
                <MypageInfo as="input" type="password" fontFamily="'Arial'" name="confirmpw" value={info.confirmpw} onChange={handleChange} placeholder="변경할 비밀번호를 한번 더 입력해주세요!"/>
                <MypageBtn onClick={handleSubmit} ><p>수정 완료 버튼!</p></MypageBtn>
            </MypageContainer>
       </MypageMain>
    )
}
export default ReviseInfo
