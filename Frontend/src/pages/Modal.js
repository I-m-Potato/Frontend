import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ModalContainer, CalenderH, ModalMain, ModalDate, ModalSelect, ModalChoose,
  ModalNext, ModalSelect2, ModalToday, TodayEcilpse, ModalPotato, ModalDone
} from '../components/StyledComponents'; // 새로 만든 스타일 컴포넌트 import
import HappyPotato from '../images/happy.png';
import SlightlyHappyPotato from '../images/littlehappy.png';
import SlightlySadPotato from '../images/littlesad.png';
import SadPotato from '../images/sad.png';
import SelectableItem from '../components/SelectableItem'; // 새로운 컴포넌트 임포트
import EmotionImage from '../components/EmotionImage'; // 새로운 컴포넌트 임포트
import ModalBackground from '../images/Diarybackground.png';

function Modal() {
    const location = useLocation();
    const navigate = useNavigate(); // useNavigate 훅 사용

    const { date } = location.state || { date: new Date() };

    const [info, setInfo] = useState({
        date: new Date(date),
        place: '',
        companion: '',
        activity: '',
        emotion: ''
    });

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(isVisible => !isVisible);
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const handleSelection = (type, value) => {
        setInfo(info => ({ ...info, [type]: value }));
    };

    const handleSave = () => {
        // 완료 버튼 클릭 시 추천 페이지로 이동
        navigate('/recommend', { state: { emotion: info.emotion } });
    };

    return (
        <ModalContainer>
            <CalenderH><h1>CALENDER</h1></CalenderH>
            <ModalMain background={ModalBackground}>
                <ModalDate><h1>{info.date.getMonth() + 1}월 {info.date.getDate()}일</h1></ModalDate>
                {isVisible ? (
                <ModalSelect>
                    <ModalChoose>
                        <h1>오늘 어디 다녀왔어??</h1>
                        <ul>
                            <SelectableItem 
                                onClick={() => handleSelection('place', '집')} 
                                selected={info.place === '집'}
                            >집</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('place', '학교')} 
                                selected={info.place === '학교'}
                            >학교</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('place', '공원')} 
                                selected={info.place === '공원'}
                            >공원</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('place', '카페')} 
                                selected={info.place === '카페'}
                            >카페</SelectableItem>
                        </ul>
                        <ul>
                            <SelectableItem 
                                onClick={() => handleSelection('place', '도서관')} 
                                selected={info.place === '도서관'}
                            >도서관</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('place', '여행지')} 
                                selected={info.place === '여행지'}
                            >여행지</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('place', '산책로')} 
                                selected={info.place === '산책로'}
                            >산책로</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('place', '그 외')} 
                                selected={info.place === '그 외'}
                            >그 외</SelectableItem>
                        </ul>
                    </ModalChoose>
                    <ModalChoose>
                        <h1>누구랑 다녀왔어?</h1>
                        <ul>
                            <SelectableItem 
                                onClick={() => handleSelection('companion', '혼자')} 
                                selected={info.companion === '혼자'}
                            >혼자</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('companion', '가족')} 
                                selected={info.companion === '가족'}
                            >가족</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('companion', '친구')} 
                                selected={info.companion === '친구'}
                            >친구</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('companion', '연인')} 
                                selected={info.companion === '연인'}
                            >연인</SelectableItem>
                        </ul>
                        <ul>
                            <SelectableItem 
                                onClick={() => handleSelection('companion', '동료')} 
                                selected={info.companion === '동료'}
                            >동료</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('companion', '반려동물')} 
                                selected={info.companion === '반려동물'}
                            >반려동물</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('companion', '지인')} 
                                selected={info.companion === '지인'}
                            >지인</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('companion', '그 외')} 
                                selected={info.companion === '그 외'}
                            >그 외</SelectableItem>
                        </ul>
                    </ModalChoose>
                    <ModalChoose>
                        <h1>뭐했어?</h1>
                        <ul>
                            <SelectableItem 
                                onClick={() => handleSelection('activity', '산책')} 
                                selected={info.activity === '산책'}
                            >산책</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('activity', '맛집')} 
                                selected={info.activity === '맛집'}
                            >맛집</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('activity', '운동')} 
                                selected={info.activity === '운동'}
                            >운동</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('activity', '영화')} 
                                selected={info.activity === '영화'}
                            >영화</SelectableItem>
                        </ul>
                        <ul>
                            <SelectableItem 
                                onClick={() => handleSelection('activity', '독서')} 
                                selected={info.activity === '독서'}
                            >독서</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('activity', '요리')} 
                                selected={info.activity === '요리'}
                            >요리</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('activity', '쇼핑')} 
                                selected={info.activity === '쇼핑'}
                            >쇼핑</SelectableItem>
                            <SelectableItem 
                                onClick={() => handleSelection('activity', '그 외')} 
                                selected={info.activity === '그 외'}
                            >그 외</SelectableItem>
                        </ul>
                    </ModalChoose>
                    <ModalNext>
                        <button onClick={toggleVisibility}>다음!</button>
                    </ModalNext>
                </ModalSelect>
                ) : (
                <ModalSelect2>
                    <ModalToday>
                        <TodayEcilpse><p>오늘의 감자</p></TodayEcilpse>
                    </ModalToday>
                    <ModalPotato>
                        <EmotionImage 
                            src={HappyPotato} 
                            alt="Happy Potato" 
                            onClick={() => handleSelection('emotion', '매우 좋음')} 
                            selected={info.emotion === '매우 좋음'}
                            description="매끈매끈 햇감자"
                        />
                        <EmotionImage 
                            src={SlightlyHappyPotato} 
                            alt="Slightly Happy Potato" 
                            onClick={() => handleSelection('emotion', '조금 좋음')} 
                            selected={info.emotion === '조금 좋음'}
                            description="말랑말랑 감자탕 속 감자"
                        />
                    </ModalPotato>
                    <ModalPotato>
                        <EmotionImage 
                            src={SlightlySadPotato} 
                            alt="Slightly Sad Potato" 
                            onClick={() => handleSelection('emotion', '조금 나쁨')} 
                            selected={info.emotion === '조금 나쁨'}
                            description="바삭바삭 감자튀김"
                        />
                        <EmotionImage 
                            src={SadPotato} 
                            alt="Sad Potato" 
                            onClick={() => handleSelection('emotion', '아주 나쁨')} 
                            selected={info.emotion === '아주 나쁨'}
                            description="물렁물렁 매쉬포테이토"
                        />
                    </ModalPotato>
                    <ModalDone>
                        <button onClick={handleSave}>완료!</button>
                    </ModalDone>
                </ModalSelect2>
                )}
            </ModalMain>
        </ModalContainer>
    );
}

export default Modal;
