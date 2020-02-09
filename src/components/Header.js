import React from 'react';
import styled from "styled-components";

const User = '테스트';

export default function Header() {


    const Wrapper = styled.div`
        display:flex;
        width:100%;
        height:60px;
        background-color:#ffffff;
        position:fixed;
    `

    const Logo = styled.img.attrs({
        src: require("../assets/logo.png")
    })`
        width:50px;
        margin:0;
        padding:0;
    `

    const LogoA = styled.a`
        height:48px;
        margin-top:7px;
        margin-left:20px;
    `

    const LeftA = styled.a`
    margin:10px 5px 10px 5px;
    height:20px;
    text-decoration:none;
    color:#000000;
    `

    const Name = styled.p`
    margin:10px;
    height:20px;
    text-decoration:none;
    color:#505050;
    `

    const LeftEl = styled.p`
    position:absolute;
    margin-top:13px;
    display:flex;
    right:20px;
    `

    return (
        <Wrapper>
            <LogoA href="">
                <Logo />
            </LogoA>

            <LeftEl>
                <Name>{User}님, 환영합니다!</Name>
                <LeftA href="">마이페이지</LeftA>
                <LeftA href="">로그아웃</LeftA>
            </LeftEl>
        </Wrapper >
    );
}