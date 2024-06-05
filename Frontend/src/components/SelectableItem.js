import React from 'react';
import styled from 'styled-components';

const SelectableItem = ({ onClick, selected, children }) => {
  return (
    <StyledLi onClick={onClick} selected={selected}>
      {children}
    </StyledLi>
  );
};

export default SelectableItem;

const StyledLi = styled.li`
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
  cursor: pointer;
  border: ${({ selected }) => (selected ? '2px solid red' : '1px solid #716656')}; /* 선택된 항목에 테두리 효과 */
`;
