import styled from "styled-components";
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { ModalContainer,ModalMain,CalenderH,ModalDate } from "./Modal";
import nextimg from "../images/next.svg"
import previmg from "../images/prev.svg"
import exalbum from "../images/album.png"
function Diary(){
    const [info, setInfo]=useState({
        date: new Date(2024,5,17),
        location:'도서관',
        company:'친구',
        activity:'독서',
        emotion:'기분 좋은 감자',
        recommendedsong:'뉴진스 - Super Shy',
        recommendedtodo:'일기 쓰며 기록하기',
        album:'../images/album.png'
    });
    const urlDate = useParams().date;
    useEffect(()=>{
        window.scroll(0,0);
        },[]);
    return(
       <ModalContainer>
        
        <CalenderH><h1>CALENDER</h1></CalenderH>
        <ModalMain>
            <DiaryDate>
                <img src={previmg}/>
                <h1>{info.date.getMonth()}월 {info.date.getDate()}일</h1>
                <img src={nextimg}/>
            </DiaryDate>
            <DiaryContent>
            <p>{info.location}에서 {info.company}랑 {info.activity}를 했어!</p>
            <p>{info.emotion}였어...</p>
            <br/>
            <p>추천 노래 : {info.recommendedsong}</p>
            <p>추천 활동 : {info.recommendedtodo}</p>
            </DiaryContent>
            <DiaryAlbum>
                <img src={exalbum}/>
            </DiaryAlbum>
        </ModalMain>
       </ModalContainer>
    )
}
export default Diary
const DiaryDate=styled(ModalDate)`
    height: 92px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 14px;
    padding-right: 14px;
`

const DiaryContent=styled.div`
    display: flex;
    width: 90%;
    height: 166px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    background-color: rgba(219, 171, 98, 0.70);
    border: 2px solid #716656;
    border-radius: 20px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 20px;
    padding-bottom: 20px;
    p{
        color: #716656;
        font-family: "BMJua";
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`
const DiaryAlbum=styled.div`
    width: 100%;
    height: 226px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 190px;
        height: 190px;
    }
`