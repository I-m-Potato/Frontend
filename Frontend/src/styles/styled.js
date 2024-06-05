import styled from "styled-components";

export const FlexBox = styled.div`
display:flex;
`;

export const Wrapper = styled(FlexBox)`
position:relative;

flex-direction:column;
justify-content:center;
align-items:center;
`;

export const WidthBlock = styled(FlexBox)`
position:relative;
width:100%;
@media screen and (min-width:450px) {
    width:393px;
}
min-height:100vh;
overflow-y:auto;
background-color:#FFF4E1;

border-left : 1px solid #ddd;
border-right : 1px solid #ddd;

flex-direction:column;
justify-content:flex-start;
align-items:center;
`;

export const Container = styled(FlexBox)`
width:100%;
background-color:#FFF;

flex-direction:column;
justify-content:center;
align-items:center;
`;

export const MainBoard = styled(FlexBox)`
position:relative;
width:100%;

flex-direction:column;
justify-content:flex-start;
align-items:center;
`;

export const BottomFixedBarBlank = styled(Container)`
width:100%;
@media screen and (min-width:450px) {
    width:393px;
}
height:104px;
background-color:transparent;
`;