import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import BottomFixedBar from "../components/BottomFixedBar";
import { WidthBlock,Wrapper,BottomFixedBarBlank } from "../styles/styled";

function Root(){
    return (
        <Wrapper>
            <WidthBlock>
                <Outlet/>
                <BottomFixedBarBlank/>
                <BottomFixedBar/>
            </WidthBlock>
        </Wrapper>
    )
}

export default Root