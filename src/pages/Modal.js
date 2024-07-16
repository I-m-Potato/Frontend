import styled from "styled-components";
import { useState,useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import ModalBackground from '../images/Diarybackground.png';
import Mashed from '../images/Mashed.png'
import { apiNewDiary } from "../apis";
import useLogin from "../hooks/useLogin";
function Modal(){
    useLogin();
    const navigate = useNavigate();
    const {date} = useParams();
    const [info, setInfo]=useState({
        id: parseInt(localStorage.getItem('userId')),
        date: date,
        place:'',
        companion:'',
        activity:'',
        emotion:''
    });
    const dateString = date;
    const [year,month,day]= dateString.split('-');

    const [isVisible, setIsVisible] = useState(true);
    const handleChange= (e)=>{
        const {name, value}=e.target
        setInfo(prev=>({
            ...prev,
            [name]:value,
        }));
    };
    const toggleVisibility = () => {
        if (!info.place || !info.companion || !info.activity) {
            alert('모든 필드를 입력해주세요.');
            return;
          } 
      setIsVisible(isVisible => !isVisible);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!info.place || !info.companion || !info.activity||!info.emotion) {
            alert('모든 필드를 입력해주세요.');
            return;
          }
        apiNewDiary(info)
        .then(response=>{
            console.log(response);
            alert('success');
            navigate('/calender');
        })
        .catch(error => alert(error));
    }
    useEffect(()=>{
    window.scroll(0,0);
    },[]);
    return(
        <ModalContainer>
        <CalenderH><h1>CALENDER</h1></CalenderH>
        <ModalMain>
            <ModalDate><h1>{month}월 {day}일</h1></ModalDate>
            <ModalSelect isVisible={isVisible}>
            <ModalChoose>
                <h1>오늘 어디 다녀왔어??</h1>
                <ul>
                    <li>
                    <input id="home" type="radio" name="place" value="집에서" checked={info.place === '집에서'} onChange={handleChange}/>
                    <label htmlFor="home" >집</label>
                    </li>
                    <li>
                    <input id="school" type="radio" name="place" value="학교에서" checked={info.place === '학교에서'} onChange={handleChange}/>
                    <label htmlFor="school" >학교</label>
                    </li>
                    <li>
                    <input id="park"type="radio" name="place" value="공원에서" checked={info.place === '공원에서'} onChange={handleChange}/>
                    <label htmlFor="park" >공원</label>
                    </li>
                    <li>
                    <input id="cafe"type="radio" name="place" value="카페에서" checked={info.place === '카페에서'} onChange={handleChange}/>
                    <label htmlFor="cafe">카페</label>
                    </li>
                </ul>
                <ul>
                    <li>
                    <input id="library"type="radio" name="place" value="도서관에서" checked={info.place === '도서관에서'} onChange={handleChange}/>
                    <label htmlFor="library">도서관</label>
                    </li>
                    <li>
                    <input id="travel"type="radio" name="place" value="여행지에서" checked={info.place === '여행지에서'} onChange={handleChange}/>
                    <label htmlFor="travel">여행지</label>
                    </li>
                    <li>
                    <input id="trail"type="radio" name="place" value="산책로에서" checked={info.place === '산책로에서'} onChange={handleChange}/>
                    <label htmlFor="trail">산책로</label>
                    </li>
                    <li>
                    <input id="gym"type="radio" name="place" value="헬스장에서" checked={info.place === '헬스장에서'} onChange={handleChange}/>
                    <label htmlFor="gym">헬스장</label>
                    </li>
                </ul>
                </ModalChoose>
                <ModalChoose>
                    <h1>누구랑 다녀왔어?</h1>
                    <ul>
                        <li>
                            <input id="alone" type="radio" name="companion" value="혼자" checked={info.companion==='혼자'} onChange={handleChange} />
                            <label htmlFor="alone">혼자</label>
                        </li>
                        <li>
                            <input id="family" type="radio" name="companion" value="가족이랑" checked={info.companion==='가족이랑'} onChange={handleChange}/>
                            <label htmlFor="family">가족</label>
                        </li>
                        <li>
                            <input id="friend" type="radio" name="companion" value="친구와" checked={info.companion==='친구와'} onChange={handleChange}/>
                            <label htmlFor="friend">친구</label>
                        </li>
                        <li>
                            <input id="couple" type="radio" name="companion" value="연인이랑" checked={info.companion==='연인이랑'} onChange={handleChange}/>
                            <label htmlFor="couple">연인</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input id="companion" type="radio" name="companion" value="동료와" checked={info.companion==='동료와'} onChange={handleChange}/>
                            <label htmlFor="companion">동료</label>
                        </li>
                        <li>
                            <input id="pet" type="radio" name="companion" value="반려동물이랑" checked={info.companion==='반려동물이랑'} onChange={handleChange}/>
                            <label htmlFor="pet">반려동물</label>
                        </li>
                        <li>
                            <input id="acquaintance" type="radio" name="companion" value="지인과" checked={info.companion==='지인과'} onChange={handleChange}/>
                            <label htmlFor="acquaintance">지인</label>
                        </li>
                        <li>
                            <input id="parent" type="radio" name="companion" value="부모님과" checked={info.companion==='부모님과'} onChange={handleChange}/>
                            <label htmlFor="parent">부모님</label>
                        </li>
                    </ul>
                </ModalChoose>
                <ModalChoose>
                    <h1>뭐했어?</h1>
                    <ul>
                        <li>
                            <input id="walk" type="radio" name="activity" value="산책을 했어" checked={info.activity==='산책을 했어'} onChange={handleChange}/>
                            <label htmlFor="walk">산책</label>
                        </li>
                        <li>
                            <input id="eat" type="radio" name="activity" value="맛집을 갔어" checked={info.activity==='맛집을 갔어'} onChange={handleChange}/>
                            <label htmlFor="eat">맛집</label>
                        </li>
                        <li>
                            <input id="exercise" type="radio" name="activity" value="운동을 했어" checked={info.activity==='운동을 했어'} onChange={handleChange}/>
                            <label htmlFor="exercise">운동</label>
                        </li>
                        <li>
                            <input id="movie" type="radio" name="activity" value="영화를 봤어" checked={info.activity==='영화를 봤어'} onChange={handleChange}/>
                            <label htmlFor="movie">영화</label>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input id="read" type="radio" name="activity" value="독서를 했어" checked={info.activity==='독서를 했어'} onChange={handleChange}/>
                            <label htmlFor="read">독서</label>
                        </li>
                        <li>
                            <input id="cook" type="radio" name="activity" value="요리했어" checked={info.activity==='요리했어'} onChange={handleChange}/>
                            <label htmlFor="cook">요리</label>
                        </li>
                        <li>
                            <input id="buy" type="radio" name="activity" value="쇼핑했어" checked={info.activity==='쇼핑했어'} onChange={handleChange}/>
                            <label htmlFor="buy">쇼핑</label>
                        </li>
                        <li>
                            <input id="sleep" type="radio" name="activity" value="숙면을 취했어" checked={info.activity==='숙면을 취했어'} onChange={handleChange}/>
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
                    <input id="1" type="radio" name="emotion" value="슬픔이었어.." checked={info.emotion==='슬픔이었어..'} onChange={handleChange}/>
                    <label htmlFor="1"><img src={Mashed}/></label>
                    <input id="2" type="radio" name="emotion" value="기쁨이었어!!" checked={info.emotion==='기쁨이었어!!'} onChange={handleChange}/>
                    <label htmlFor="2"><img src={Mashed}/></label>
                </ModalPotato>
                <ModalPotato>
                    <input id="3" type="radio" name="emotion" value="불안했었어ㅠㅠ" checked={info.emotion==='불안했었어ㅠㅠ'} onChange={handleChange}/>
                    <label htmlFor="3"><img src={Mashed}/></label>
                    <input id="4" type="radio" name="emotion" value="신났었어~~" checked={info.emotion==='신났었어~~'} onChange={handleChange}/>
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
