import styled from 'styled-components'

export const FeedBox = styled.div `
flex: 1;
border-right: 1px solid #e6ecf0;
min-width: fit-content;
overflow-y: scroll;
--ms-overflow-style:none;
-scrollbar-width: none;
height: 100vh;

&::-webkit-scrollbar {
    display: none;
}
`
export const FeedHeader = styled.div `
position: sticky;
top: 0;
z-index:100;
border: 1px solid  #e6ecf0;
padding: 15px 20px;
background-color: #fff;
`

export const FeedHeaderText = styled.h2 `
font-size: 20px;
font-weight: 800;
font-family: poppins;
color:  #261c15;
text-transform: uppercase;
`

export const TweetBoxImage = styled.img `
border-radius: 50%;
height: 40px;
`

export const TweetBox = styled.div `
 padding-bottom: 10px;
 border-bottom: 8px solid  #e6ecf0;
 padding-right: 10px;
`

export const TweetBoxForm = styled.form ` 
 display: flex;
 flex-direction: column;
`

export const TweetBoxInput = styled.div ` 
display: flex;
padding: 20px;
`

export const TweetBoxInputI = styled.textarea ` 
flex: 1;
margin-left: 20px;
font-size: 20px;
border: none;
outline: none;
color: #261c15;
`
export const TweetBoxButton = styled.button ` 
border: none;
color:  #261c15;
font-weight: 400;
font-family: poppins;
border-radius: 30px;
width: 80px;
height: 40px;
margin-top: 20px;
margin-left: auto;
background-color:  #c5d86d;

&:hover{
    opacity: 0.9;
    transition: opacity 100ms ease-out;
}
`

export const Post = styled.div `
display: flex;
align-items: flex-start;
border-bottom: 1px solid #e6ecf0;
padding-bottom: 10px;
`

export const PostAvatar =   styled.div ` 
padding: 20px;
`
export const PostAvatarImage = styled.img ` 
border-radius: 50%;
height: ${props => props.height};

`

export const PostBody = styled.div `
flex: 1;
padding:10px;
`

export const PostHeaderSpecial  = styled.span ` 
font-weight: 600;
font-size: 12px;
font-family: poppins;
color: gray;
margin-left: 5px;
`

export const PostHeaderText = styled.h3 ` 
 font-size: 18px;
 margin-bottom: 5px;
 font-family: poppins;
 color:  #261c15;
 font-weight: 800;
`

export const PostHeaderDescription = styled.div ` 
margin-bottom: 10px;
font-size: 16px;
font-family: poppins;
color:  #261c15;
`

export const PostBodyImage = styled.img `
width: 550px;
object-fit: contain;
border-radius: 20px;
`

export const PostFooter = styled.div `
display: flex;
margin-top: 10px;
`

export const PostBadge = styled.span `
margin-right: 5px;
`