import styled from "styled-components";
import { useState,useEffect} from "react";
import MypageBackground from '../images/Mypage.png';
import ThreePotato from '../images/Threepotato.png';
function MyPage(){
    const [info, setInfo]=useState({
        nickname: '행복한 감자',
        date: new Date(2024,5,15),
    });

    useEffect(()=>{
    window.scroll(0,0);
    },[]);
    
    return(
       <MypageMain>
            <img src={ThreePotato} />
            <MypageContainer>
                <MypageInfo><p>감자 심은 날:{info.date.getFullYear()}년 {info.date.getMonth()}월 {info.date.getDate()}일</p></MypageInfo>
                <MypageInfo><p>{info.nickname}</p></MypageInfo>
                <MypageBtn><p>감자 정보 수정</p></MypageBtn>
            </MypageContainer>
       </MypageMain>
    )
}
export default MyPage

const MypageMain= styled.div`
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

const MypageContainer=styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    margin-top: 36px;
`
const MypageInfo=styled.div`
    width: 335px;
    height: 39px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #000;
    background-color: #eaaf7d;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
`
const MypageBtn=styled.button`
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