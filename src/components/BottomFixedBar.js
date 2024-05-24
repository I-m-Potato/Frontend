import { Container, FlexBox } from "../styles/styled";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import calender from '../images/calender.png';
import myPage from '../images/potato.png';
import main from '../images/sprout.png';

function BottomFixedBar(){
    const navigate = useNavigate();

    return (
        <ContainerBottomFixedBar>
            <BtnBox onClick={()=>{navigate('/calender')}}>
                <img src={calender}/>
            </BtnBox>
            <BtnBox onClick={()=>{navigate('')}}>
                <img src={main}/>
            </BtnBox>
            <BtnBox onClick={()=>{navigate('/myPage')}}>   
                <img src={myPage}/>
            </BtnBox>
        </ContainerBottomFixedBar>
    )
}

export default BottomFixedBar;

const ContainerBottomFixedBar = styled(Container)`
position:fixed;
bottom:0;

display:grid;
grid-template-columns:repeat(3,1fr);

width:100%;
@media screen and (min-width:450px) {
    width:393px;
}
height:80px;

border: 1.5px solid #716656;
background: #FFF4E1;
img{
    width: 60px;
    height: 60px;
}
`;

const BtnBox = styled(FlexBox)`
flex-direction:column;
justify-content:center;
align-items:center;
cursor:pointer;
`