import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 393px;
  height: 556px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
`;

export const CalenderH = styled.div`
  display: flex;
  width: 393px;
  height: 72px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  h1 {
    color: #716656;
    font-family: "BMJua";
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ModalMain = styled.div`
  position: relative;
  display: flex;
  width: 366px;
  height: 484px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid #716656;
  background-color: #716656;
  overflow: hidden;
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
    background: url(${props => props.background}) 50% / cover no-repeat;
    opacity: 0.9;
    z-index: 1;
  }
  & > * {
    position: relative;
    z-index: 2;
  }
`;

export const ModalDate = styled.div`
  width: 100%;
  height: 44px;
  h1 {
    color: #F8E5B3;
    text-align: center;
    font-family: "Short Stack";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ModalSelect = styled.div`
  width: 90%;
  height: 353px;
  border-radius: 20px;
  background-color: rgba(219,171,98,0.70);
  margin-bottom: 47px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalChoose = styled.div`
  width: 80%;
  height: 85px;
  margin-top: 15px;
  h1 {
    height: 33%;
    color: #716656;
    font-family: "BMJua";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  ul {
    height: 33%;
    display: flex;
    column-gap: 10px;
  }
`;

export const ModalNext = styled.div`
  width: 90%;
  height: 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  button {
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
    cursor: pointer;
  }
`;

export const ModalSelect2 = styled.div`
  width: 90%;
  height: 353px;
  border-radius: 20px;
  background-color: rgba(219,171,98,0.70);
  margin-bottom: 47px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalToday = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TodayEcilpse = styled.div`
  display: flex;
  width: 70px;
  height: 35px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #F8E5B3;
  border: 2px solid #716656;
  p {  
    color: #716656;
    text-align: center;
    font-family: "Short Stack";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ModalPotato = styled.div`
  width: 100%;
  height: 117px;
  display: flex;   
  justify-content: center;
  gap: 30px;
`;

export const ModalDone = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 40px;
  button {
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
    cursor: pointer;
  }
`;
