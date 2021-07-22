import styled from 'styled-components'


export const ChatContainer = styled.div`
height: 100vh;
max-height: 800px;
width:100%;
border-right: 1px solid #e6ecf0;
min-width: fit-content;
display:grid;
grid: 'ChatTitle' 71px
'ChatMessageList' 1fr
        'ChatForm' 75px;
`

export const ChatTitle = styled.div`
 display: grid;
 grid-area: ChatTitle;
 grid: 36px / 1fr 36px
 align-content: center;
 align-items: center;
 color:  #261c15;
 border-raduis: 0 10px 0 0;
 box-shadow: 0 1px 3px -1px rgba(0,0,0,0.75);
 padding: 0 20px;
 background-color: #eee;
 z-index: 1;
`;

export const ChatForm = styled.div`
 display: grid;
 grid-area: ChatForm;
 grid: 51px / 32px 1fr;
 align-content: center;
 align-items: center;
 grid-gap: 15px;
 border-raduis: 0 0 10px 0;
 border-top: 1px solid rgba(0,0,0,0.25);
 padding-left: 42px;
 padding-right: 22px;
 background-color: #eee;
`;

export const ChatInput = styled.input`
outline: none;
padding: 10px;
border: 2px solid #ddd;
color: #330;
border-radius: 6px;
font-size: 15px;
`

export const ChatMessageList = styled.div`
display: flex;
grid-area: ChatMessageList;
flex-direction: column-reverse;
padding: 0 20px;
overflow-y: scroll;
`

export const MessageRow = styled.div`
display:grid;
grid-template-columns: 70%;
margin-bottom: 20px;
`
export const MessageText = styled.div`
padding: 9px 14px;
font-size: 20px;
font-family:poppins;
color: #261c15;
border-radius: 14px 14px 0 14px;
margin-bottom: 5px;
`

export const MessageTime = styled.div`
font-size: 12px;
font-family: poppins;
color: #777;
`
export const YouMessage = styled.div`
border: 1px solid #c5d86d;
border-radius: 14px 14px 0 14px;
background: #c5d86d;
padding: 9px 14px;
`

export const OtherMessage = styled.div`
background: #e6ecf0;
color: #261c15;
border: 1px solid #e6ecf0;
border-radius: 14px 14px 14px 0;
padding: 9px 14px;
justify-items: start;
`
export const MessageContent = styled.div`
display: grid;
grid-template-columns: 48px 1fr;
grid-column-gap: 5px;
`