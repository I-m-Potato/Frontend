import React from 'react';
import styled from 'styled-components';

const EmotionImage = ({ src, alt, onClick, selected, description }) => {
  return (
    <EmotionContainer onClick={onClick} selected={selected}>
      <StyledImg src={src} alt={alt} />
      <Description>{description}</Description>
    </EmotionContainer>
  );
};

export default EmotionImage;

const EmotionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: ${({ selected }) => (selected ? '2px solid red' : 'none')}; /* 선택된 항목에 테두리 효과 */
`;

const StyledImg = styled.img`
  width: 90px;
  height: 90px;
`;

const Description = styled.p`
  margin: 5px 0 0;
  font-family: "BMJua";
  font-size: 14px;
  color: #716656;
  text-align: center;
`;
