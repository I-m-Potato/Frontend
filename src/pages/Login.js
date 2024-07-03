import React from "react";
import styled from "styled-components";
import ThreePotato from '../images/character.png';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';


const Login = () => {
  const navigate= useNavigate();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginaxios = (e) => {
    e.preventDefault();
	// 창이 새로고침되는 것을 막는다. 
    axios
      .post("/login", {
        email: email,
        password: password,
      
      })
      // 다시 해보기 
      .then((response) => {
        localStorage.setItem("Token", response.headers.authorization);
        console.log(response);
        if ((response.status = 200)) {
          return navigate("/posts");
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message)
        console.log(err);
      });
  };

  return (
    <Container>
      <DefaultPotatoImage src={ThreePotato} alt="감자 캐릭터" />
      <Title>Login</Title>
      <Form >
        <Input type="text" placeholder="이메일 주소" name='id' vlaue={FormData.id} onChange={(e) => {
            setEmail(e.target.value);
           }}/>
        <Input type="password" placeholder="비밀번호" name='pw' value={FormData.pw} onChange={(e) => {
            setPassword(e.target.value);
           }} />
        <Input type="checkbox" style={checkboxStyle}/><label htmlFor="check1">비밀번호 저장하기</label>
        <SubmitButton type="submit" onClick={loginaxios} value="로그인" />
      </Form>
      <hr style={hrStyle} />
      <SignUpLink href="http://localhost:3000/join">회원가입하기</SignUpLink>
    </Container>
  );
};
export default Login;

// 스타일 정의
const Container = styled.div`
  width: 100%;
  max-width: 390px;
  height:770px;
  margin: 0px auto;
  padding-bottom: 100px;
  background-color: #FFF4E1;
  box-sizing: border-box;
  text-align: center;
  font-family: 'BMJua', Arial, sans-serif;
`;


const Title = styled.h1`
  color: #BDA170;
  font-size: 80px;
  margin-top: 0;
`;

const Form = styled.form`
  margin-top: 25px;
`;

const Input = styled.input`
  font-family: 'BMJua', Arial, sans-serif;
  color: #FFFFFF;
  margin: 10px 25px auto;
  width: 330px;
  height: 60px;
  outline: none;
  background-color: rgba(217, 217, 217, 0.7);
  font-size: 25px;
  border-radius: 15px;
  border: 0;
`;

const SubmitButton = styled.input`
  font-family: 'BMJua', Arial, sans-serif;
  color: #FFFFFF;
  margin: 5px 25px auto;
  width: 330px;
  height: 60px;
  outline: none;
  background-color: #BDA170;
  font-size: 25px;
  border-radius: 30px;
  border: 0;
`;

const checkboxStyle = {
    width: "25px",
    height: "25px",
    margin: "14px 5px 14px",
    position:"relative",
    top:"7px"
  };

const SignUpLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 20px; 
  text-decoration: none; 
  color: #5A3A1C;
`;

const DefaultPotatoImage = styled.img`
  display: block;
  margin: 0px auto; // 이미지의 가운데 정렬을 위해 margin 수정
  padding-top:100px;
  width: 100px; // 원하는 너비로 설정
  height: auto; // 높이는 자동으로 조정됨
`;

const hrStyle = {
    width: "330px",
    margin: "30px auto", // 가운데 정렬을 위해 수정
  };

