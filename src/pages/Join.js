import styled from "styled-components";
import ThreePotato from '../images/character.png';
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { url } from "../apis";
function Join(){
  useLogin();
  const navigate=useNavigate();
  const [usernameinput,setUsernameinput]=useState("");
  const [emailinput,setEmailinput]=useState("");
  const [passwordinput,setPasswordinput]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const today=new Date();
  const signup_date = new Date().toISOString().slice(0, 10); 
  console.log(signup_date);
  const registeraxios =(e) =>{
    e.preventDefault();

    if (passwordinput !== confirmPassword) {
      window.alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    axios
    .post(`${url}/api/signup`,{
      //request
      name:usernameinput,
      email:emailinput,
      password:passwordinput,
      signup_date: signup_date,
    })
    .then((response)=>{
      console.log(response);
      window.alert('회원가입성공!');
      navigate('/login');
     })
     .then(data=>{
      console.log(data);
     })
     .catch((err)=>{
      window.alert('회원가입에 실패하였습니다. 다시 시도해 주세요');
      console.log(err);
    });
  };

   return (
    <Container>
    <DefaultPotatoImage src={ThreePotato} alt="감자 캐릭터" />
      <Title>Sign up</Title>
      <Form onSubmit={registeraxios}>
        <Input type="text" placeholder="이메일 주소" 
        value={emailinput}
        onChange={(e)=>{
          setEmailinput(e.target.value);
        }}/>
        <Input type="text" placeholder="사용자 닉네임" 
        value={usernameinput}
        onChange={(e)=>{
          setUsernameinput(e.target.value);
        }} />
        <Input type="password" placeholder="비밀번호"
        value={passwordinput}
        onChange={(e) => {
          setPasswordinput(e.target.value);
        }} />
        <Input type="text" placeholder="비밀번호 확인하기"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <hr style={hrStyle} />
        <SubmitButton onClick={registeraxios} type="submit" value="회원가입" />
      </Form>

    </Container>
  );
}


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

const Input=styled.input`
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

  //props를 활용하여 조건부로 스타일 설정 가능(비밀번호 입력 보이지 않음 방지)
  ${props=>props.type==='password' &&  `
    font-family:'Palatino Linotype','Book Antiqua',Palatino,serif;
    `}

  &::placeholder {
    font-family: 'BMJua', Arial, sans-serif; /* placeholder 폰트 설정 */
  }
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
export default Join