import styled from "styled-components";
import { useState,useEffect} from "react";
import MypageBackground from '../images/Mypage.png';
import ThreePotato from '../images/Threepotato.png';
import { useNavigate } from "react-router-dom";
import { apiGetProfile } from "../apis";
import useLogin from "../hooks/useLogin";

function MyPage(){
    useLogin();
    const navigate = useNavigate();
    const [info, setInfo]=useState({
        name: '행복한 감자',
        date: '2024-05-17'
    });
    const dateString = info.date;
    const [year,month,day]= dateString.split('-');
    
    const getInfo = () =>{
        const token = localStorage.getItem('userId');
        console.log(token)
        apiGetProfile(token)
        .then (response => {
            console.log(response.data);
            setInfo(response.data);
        })
        .catch(error =>{
            alert(error);
        })
    }
    useEffect(()=>{
    getInfo();
    window.scroll(0,0);
    },[]);
    
    return(
       <MypageMain>
            <img src={ThreePotato} />
            <MypageContainer>
                <MypageInfo><p>감자 심은 날:{year}년 {month}월 {day}일</p></MypageInfo>
                <MypageInfo><p>{info.name}</p></MypageInfo>
                <MypageBtn onClick={()=>{navigate('/reviseInfo')}}><p>감자 정보 수정</p></MypageBtn>
            </MypageContainer>
       </MypageMain>
    )
}
export default MyPage

export const MypageMain= styled.div`
    position: relative;
    margin-top: 20px;
    display: flex;
    width: 366px;
    height: 547px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 2px solid #716656;
    background-color: lightgray; // 기본 배경색 설정
    overflow: hidden; // 내용이 가상 요소를 벗어나지 않도록 설정
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${MypageBackground}) 50% / cover no-repeat;
        opacity: 0.5; // 배경 이미지의 투명도 설정
        z-index: 1; // 가상 요소가 배경 뒤에 위치하도록 설정
    }
    
    // 실제 콘텐츠를 z-index를 통해 가상 요소 위에 위치시키기
    & > * {
        position: relative;
        z-index: 2;
    }
    img{
        width: 142px;
        height: 165px;
        position: relative;
    }
`

export const MypageContainer=styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    margin-top: 36px;
`
export const MypageInfo=styled.div`
    width: 335px;
    height: 39px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #000;
    background-color: #eaaf7d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #513535;
      align-items: center;
      text-align: center;
      font-family: ${props => props.fontFamily || '"BMJua"'};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    p{  
        color:#513535;
        align-items: center;
        text-align: center;
        font-family: "BMJua";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    &::placeholder {
      color: #513535;
      align-items: center;
      text-align: center;
      font-family: "BMJua";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    &:focus {
    outline: none;
    box-shadow: none;
  }
`
export const MypageBtn=styled.button`
    width: 335px;
    height: 39px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #000;
    background-color: #FFE6AB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{  
        color:#648240;
        align-items: center;
        text-align: center;
        font-family: "BMJua";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`