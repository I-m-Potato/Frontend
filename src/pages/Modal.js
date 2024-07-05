import styled from "styled-components";
import { useState,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import ModalBackground from '../images/Diarybackground.png';
import Mashed from '../images/Mashed.png'

function Modal(){
    const navigate = useNavigate();
    const location =useLocation();
    const [info, setInfo]=useState({
        date: new Date(location.state.date),
        location:'',
        company:'',
        activity:'',
        emotion:''
    });
    const [isVisible, setIsVisible] = useState(true);
    const handleChange= (e)=>{
        const {name, value}=e.target
        setInfo(prev=>({
            ...prev,
            [name]:value,
        }));
    };
    const toggleVisibility = () => {
        if (!info.location || !info.company || !info.activity) {
            alert('모든 필드를 입력해주세요.');
            return;
          } 
      setIsVisible(isVisible => !isVisible);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!info.location || !info.company || !info.activity||!info.emotion) {
            alert('모든 필드를 입력해주세요.');
            return;
          }
        else{
            navigate('/calender');
        }
    }
    useEffect(()=>{
    window.scroll(0,0);
    },[]);
    return(
        <ModalContainer>
        <CalenderH><h1>CALENDER</h1></CalenderH>
        <ModalMain>
            <ModalDate><h1>{info.date.getMonth()+1}월 {info.date.getDate()}일</h1></ModalDate>
            <ModalSelect isVisible={isVisible}>
            <ModalChoose>
                <h1>오늘 어디 다녀왔어??</h1>
                <ul>
                    <li>
                    <input id="home" type="radio" name="location" value="집" checked={info.location === '집'} onChange={handleChange}/>
                    <label htmlFor="home" >집</label>
                    </li>
                    <li>
                    <input id="school" type="radio" name="location" value="학교" checked={info.location === '학교'} onChange={handleChange}/>
                    <label htmlFor="school" >학교</label>
                    </li>
                    <li>
                    <input id="park"type="radio" name="location" value="공원" checked={info.location === '공원'} onChange={handleChange}/>
                    <label htmlFor="park" >공원</label>
                    </li>
                    <li>
                    <input id="cafe"type="radio" name="location" value="카페" checked={info.location === '카페'} onChange={handleChange}/>
                    <label htmlFor="cafe">카페</label>
                    </li>
                </ul>
                <ul>
                    <li>
                    <input id="library"type="radio" name="location" value="도서관" checked={info.location === '도서관'} onChange={handleChange}/>
                    <label htmlFor="library">도서관</label>
                    </li>
                    <li>
                    <input id="travel"type="radio" name="location" value="여행지" checked={info.location === '여행지'} onChange={handleChange}/>
                    <label htmlFor="travel">여행지</label>
                    </li>
                    <li>
                    <input id="trail"type="radio" name="location" value="산책지" checked={info.location === '산책지'} onChange={handleChange}/>
                    <label htmlFor="trail">산책로</label>
                    </li>
                    <li>
                    <input id="gym"type="radio" name="location" value="헬스장" checked={info.location === '헬스장'} onChange={handleChange}/>
                    <label htmlFor="gym">헬스장</label>
                    </li>
                </ul>
                </ModalChoose>
                <ModalChoose>
                    <h1>누구랑 다녀왔어?</h1>
                    <ul>
                        <li>
                            <input id="alone" type="radio" name="company" value="혼자" checked={info.company==='혼자'} onChange={handleChange} />
                            <label htmlFor="alone">혼자</label>
                        </li>
                        <li>
                            <input id="family" type="radio" name="company" value="가족" checked={info.company==='가족'} onChange={handleChange}/>
                            <label htmlFor="family">가족</label>
                        </li>
                        <li>
                            <input id="friend" type="radio" name="company" value="친구" checked={info.company==='친구'} onChange={handleChange}/>
                            <label htmlFor="friend">친구</label>
                        </li>
                        <li>
                            <input id="couple" type="radio" name="company" value="연인" checked={info.company==='연인'} onChange={handleChange}/>
                            <label htmlFor="couple">연인</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input id="companion" type="radio" name="company" value="동료" checked={info.company==='동료'} onChange={handleChange}/>
                            <label htmlFor="companion">동료</label>
                        </li>
                        <li>
                            <input id="pet" type="radio" name="company" value="반려동물" checked={info.company==='반려동물'} onChange={handleChange}/>
                            <label htmlFor="pet">반려동물</label>
                        </li>
                        <li>
                            <input id="acquaintance" type="radio" name="company" value="지인" checked={info.company==='지인'} onChange={handleChange}/>
                            <label htmlFor="acquaintance">지인</label>
                        </li>
                        <li>
                            <input id="parent" type="radio" name="company" value="부모님" checked={info.company==='부모님'} onChange={handleChange}/>
                            <label htmlFor="parent">부모님</label>
                        </li>
                    </ul>
                </ModalChoose>
                <ModalChoose>
                    <h1>뭐했어?</h1>
                    <ul>
                        <li>
                            <input id="walk" type="radio" name="activity" value="산책" checked={info.activity==='산책'} onChange={handleChange}/>
                            <label htmlFor="walk">산책</label>
                        </li>
                        <li>
                            <input id="eat" type="radio" name="activity" value="맛집" checked={info.activity==='맛집'} onChange={handleChange}/>
                            <label htmlFor="eat">맛집</label>
                        </li>
                        <li>
                            <input id="exercise" type="radio" name="activity" value="운동" checked={info.activity==='운동'} onChange={handleChange}/>
                            <label htmlFor="exercise">운동</label>
                        </li>
                        <li>
                            <input id="movie" type="radio" name="activity" value="영화" checked={info.activity==='영화'} onChange={handleChange}/>
                            <label htmlFor="movie">영화</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input id="read" type="radio" name="activity" value="독서" checked={info.activity==='독서'} onChange={handleChange}/>
                            <label htmlFor="read">독서</label>
                        </li>
                        <li>
                            <input id="cook" type="radio" name="activity" value="요리" checked={info.activity==='요리'} onChange={handleChange}/>
                            <label htmlFor="cook">요리</label>
                        </li>
                        <li>
                            <input id="buy" type="radio" name="activity" value="쇼핑" checked={info.activity==='쇼핑'} onChange={handleChange}/>
                            <label htmlFor="buy">쇼핑</label>
                        </li>
                        <li>
                            <input id="sleep" type="radio" name="activity" value="숙면" checked={info.activity==='숙면'} onChange={handleChange}/>
                            <label htmlFor="sleep">숙면</label>
                        </li>
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
                    <input id="1" type="radio" name="emotion" value="슬픔" checked={info.emotion==='슬픔'} onChange={handleChange}/>
                    <label htmlFor="1"><img src={Mashed}/></label>
                    <input id="2" type="radio" name="emotion" value="기쁨" checked={info.emotion==='기쁨'} onChange={handleChange}/>
                    <label htmlFor="2"><img src={Mashed}/></label>
                </ModalPotato>
                <ModalPotato>
                    <input id="3" type="radio" name="emotion" value="불안" checked={info.emotion==='불안'} onChange={handleChange}/>
                    <label htmlFor="3"><img src={Mashed}/></label>
                    <input id="4" type="radio" name="emotion" value="신남" checked={info.emotion==='신남'} onChange={handleChange}/>
                    <label htmlFor="4"><img src={Mashed}/></label>
                </ModalPotato>
                <ModalDone>
                     <button onClick={handleSubmit}>완료!</button>
                </ModalDone>
            </ModalSelect2>
        </ModalMain>
        </ModalContainer>
    )
}
export default Modal
export const ModalContainer = styled.div`
    width: 393px;
    height: 556px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;
`

export const CalenderH = styled.div`
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

export const ModalMain = styled.div`
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

export const ModalDate = styled.div`
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
    img{
        width: 33.951px;
        height: 42px;
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
    display: ${props => (props.isVisible ? 'block' : 'none')};
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
    input[type="radio"] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
        &:checked+label{
            scale: 1.3;
            color: #3A8726;
        }
  }
  label {
    cursor: pointer;
    color:#716656;
    text-align: center;
    font-family: "BMJua";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    &:hover {
      scale:1.1;
    }
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
        display: ${props => (props.isVisible ? 'none' : 'block')};
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
        font-family: "BMJua";
        font-size: 13px;
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
        input[type="radio"] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
        &:checked+label{
            scale: 1.2;
        }
        }
        label {
            cursor: pointer;
            &:hover {
            scale:1.05;
            }
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
