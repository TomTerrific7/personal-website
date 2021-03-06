import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background:#74EBD5;
    height: 100px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    resize: both;
  overflow: auto;
    
`;


export const NavLink = styled(Link)`
color: #818078;
display: flex;
align-items: center;

text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color:#818078;
}
&:hover {
  color: #c5c3b3;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: right;
  margin-right: 10px;
  padding-right: 70px;
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: linear-gradient(#74EBD5, #9FACE6);
  padding: 10px 22px;
  color: black;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;