import styled from 'styled-components'

export const Container = styled.div `
display: flex;
height: 100vh;
max-width: 1300px;
margin-left: auto;
margin-right: auto;
padding: 0 10px;
`

export const SideBarOption = styled.div`
 display: flex;
 align-items: center;
 cursor: pointer;

 &:hover {
     background-color: #e6ecf0;
     border-radius: 30px;
     transition: color 100ms ease-out;
 }
`

export const LeftBar = styled.div `
 border-right: 1px solid #e6ecf0;
 flex: 0.2;
 min-width: 250px;
 margin-top: 20px;
 padding-left: 20px;
 padding-right: 20px;
`

export const LinkText = styled.h2 `
 font-weight: 400;
 font-size: 20px;
 margin-right: 20px;
 font-family: poppins;


 &::active {
     color: #1DF232;
 }
 ` 