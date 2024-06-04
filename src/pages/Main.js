import React from "react";
import styled from "styled-components";

// 스타일 정의
const Container = styled.div`
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  background-image: url('images/배경3.jpg'); 
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  overflow: hidden; // 스크롤 제거
  height: 100vh; // 화면 전체를 차지하도록 설정
  font-family: 'BMJua', Arial, sans-serif;
`;

const WeatherImage = styled.img`
  display: block;
  margin: 30px auto;
`;

const DefaultPotatoImage = styled.img`
  display: block;
  margin: 210px auto;
`;

const Title = styled.h1`
  font-size: 25px;
  text-align: center;
`;

const today = new Date();
const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일`;

const Main = () => {
  return (
    <Container>
      <WeatherImage src="images/날씨.png" alt="날씨" /> 
      <Title>
        {formattedDate}<br />
        감자의 이야기<br />
        날씨: 햇빛 쨍쨍
      </Title>
      <DefaultPotatoImage src="images/character.png" alt="감자 캐릭터" />
    </Container>
  );
};

export default Main;
