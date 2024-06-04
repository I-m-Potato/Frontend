import styled from "styled-components";
import { useState,useEffect} from "react";
import ModalBackground from '../images/Diarybackground.png';
import Mashed from '../images/Mashed.png'
function Modal(){
    const [info, setInfo]=useState({
        date: new Date(2024,5,17),
    });
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
      setIsVisible(isVisible => !isVisible);
    };
    useEffect(()=>{
    window.scroll(0,0);
    },[]);
    return(
        <ModalContainer>
        <CalenderH><h1>CALENDER</h1></CalenderH>
        <ModalMain>
            <ModalDate><h1>{info.date.getMonth()}월 {info.date.getDate()}일</h1></ModalDate>
            <ModalSelect isVisible={isVisible}>
                <ModalChoose>
                    <h1>오늘 어디 다녀왔어??</h1>
                    <ul>
                        <li>집</li>
                        <li>학교</li>
                        <li>공원</li>
                        <li>카페</li>
                    </ul>
                    <ul>
                        <li>도서관</li>
                        <li>여행지</li>
                        <li>산책로</li>
                        <li>그 외</li>
                    </ul>
                </ModalChoose>
                <ModalChoose>
                    <h1>누구랑 다녀왔어?</h1>
                    <ul>
                        <li>혼자</li>
                        <li>가족</li>
                        <li>친구</li>
                        <li>연인</li>
                    </ul>
                    <ul>
                        <li>동료</li>
                        <li>반려동물</li>
                        <li>지인</li>
                        <li>그 외</li>
                    </ul>
                </ModalChoose>
                <ModalChoose>
                    <h1>뭐했어?</h1>
                    <ul>
                        <li>산책</li>
                        <li>맛집</li>
                        <li>운동</li>
                        <li>영화</li>
                    </ul>
                    <ul>
                        <li>독서</li>
                        <li>요리</li>
                        <li>쇼핑</li>
                        <li>그 외</li>
                    </ul>
                </ModalChoose>
                <ModalNext>
                    <button onClick={toggleVisibility}>다음!</button>
                </ModalNext>
            </ModalSelect>
            <ModalSelect2 isVisible={isVisible}>
                <ModalToday>
                    <TodayEcilpse><p>오늘의 감자</p></TodayEcilpse>
                </ModalToday>
                <ModalPotato>
                    <img src={Mashed}/>
                    <img src={Mashed}/>
                </ModalPotato>
                <ModalPotato>
                    <img src={Mashed}/>
                    <img src={Mashed}/>
                </ModalPotato>
                <ModalDone>
                     <button onClick={toggleVisibility}>완료!</button>
                </ModalDone>
            </ModalSelect2>
        </ModalMain>
        </ModalContainer>
    )
}
export default Modal
const ModalContainer = styled.div`
    width: 393px;
    height: 556px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;
`

const CalenderH = styled.div`
    display: flex;
    width: 393px;
    height: 72px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-shrink: 0;
    h1{
        color: #716656;
        font-family: "BMJua";
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`

const ModalMain = styled.div`
    position: relative;
    display: flex;
    width: 366px;
    height: 484px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 2px solid #716656;
    background-color: #716656; // 기본 배경색 설정
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
        background: url(${ModalBackground}) 50% / cover no-repeat;
        opacity: 0.9; // 배경 이미지의 투명도 설정
        z-index: 1; // 가상 요소가 배경 뒤에 위치하도록 설정
    }
    
    // 실제 콘텐츠를 z-index를 통해 가상 요소 위에 위치시키기
    & > * {
        position: relative;
        z-index: 2;
    }
`

const ModalDate = styled.div`
    width: 100%;
    height: 44px;
    h1{
        color: #F8E5B3;
        text-align: center;
        font-family: "Short Stack";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`
const ModalSelect = styled.div`
    width: 90%;
    height: 353px;
    border-radius: 20px;
    background-color: rgba(219,171,98,0.70);
    margin-bottom: 47px;
    padding-left:30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: ${props => (props.isVisible ? 'block' : 'none')}
`
const ModalChoose = styled.div`
    width: 80%;
    height: 85px;
    margin-top: 15px;
    h1{
        height: 33%;
        color: #716656;
        font-family: "BMJua";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    ul{
        height: 33%;
        display: flex;
        column-gap: 10px;
    }
    li{
        display: flex;
        width: 57px;
        height: 23px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        color: #716656;
        text-align: center;
        font-family: "BMJua";
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background-color: #F8E5B3;
        border-radius: 50%;
        border: solid 1px #716656;
    }
`
const ModalNext=styled.div`
    width: 90%;
    height: 34px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    button{
        display: flex;
        width: 75px;
        height: 25px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        color: #716656;
        font-family: "BMJua";
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background-color: #F8E5B3;
        border-radius: 50%;
        border: solid 1px #716656;
    }
`   
    const ModalSelect2=styled.div`
        width: 90%;
        height: 353px;
        border-radius: 20px;
        background-color: rgba(219,171,98,0.70);
        margin-bottom: 47px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        display: ${props => (props.isVisible ? 'none' : 'block')}
    `
    const ModalToday=styled.div`
        width: 100%;
        height: 57px;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const TodayEcilpse=styled.div`
    display: flex;
    width: 70px;
    height: 35px;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    flex-shrink: 0;
    border-radius: 50%;
    background-color:#F8E5B3;
    border: 2px solid #716656;
    p{  
        color: #716656;
        text-align: center;
        font-family: "Short Stack";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        }
    `
    const ModalPotato=styled.div`
        width: 100%;
        height: 117px;
        display:flex;   
        justify-content:center;
        gap:30px;
        img{
            width:90px;
            height:90px;
        }
    `
    const ModalDone=styled.div`
        width: 100%;
        height:62px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        margin-right:40px;
        button{
        display: flex;
        width: 75px;
        height: 25px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        color: #716656;
        font-family: "BMJua";
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background-color: #F8E5B3;
        border-radius: 50%;
        border: solid 1px #716656;
    }
    `
