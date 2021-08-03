import React from 'react'
import { ImAttachment } from 'react-icons/im'
import { ChatTitle, ChatForm, ChatMessageList, ChatInput, MessageRow, MessageText, MessageTime, YouMessage, OtherMessage, ChatContainer, MessageContent } from '../Components/Chat.style'

function Chat() {
    return (

        <ChatContainer>
            <ChatTitle>
                <span>Jon Doe</span>
            </ChatTitle>

            <ChatMessageList>
            <MessageRow style={{ justifyContent: 'end', justifyItems: 'end' }}>
                    <MessageText>
                        <YouMessage> Ok then </YouMessage>

                    </MessageText>
                    <MessageTime>Apr 16</MessageTime>
                </MessageRow>

                <MessageRow style={{ justifyItems: 'start' }}>
                    <MessageContent>
                        <img src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg" style={{ borderRadius: '100%', gridRow: 'span 2' }} alt='other' />
                        <MessageText>
                            <OtherMessage> Yeah i think its best if we can transfer the goods
                                from bayelsa to port harcourt </OtherMessage>
                        </MessageText>
                        <MessageTime>Apr 16</MessageTime>
                    </MessageContent>

                </MessageRow>
                
                <MessageRow style={{ justifyContent: 'end', justifyItems: 'end' }}>
                    <MessageText>
                        <YouMessage> how would you like to transfer the goods </YouMessage>

                    </MessageText>
                    <MessageTime>Apr 16</MessageTime>
                </MessageRow>

                <MessageRow style={{ justifyItems: 'start' }}>
                    <MessageContent>
                        <img src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg" style={{ borderRadius: '100%', gridRow: 'span 2' }} alt='other' />
                        <MessageText>
                            <OtherMessage>i have made the transfer </OtherMessage>
                        </MessageText>
                        <MessageTime>Apr 16</MessageTime>
                    </MessageContent>

                </MessageRow>

                <MessageRow style={{ justifyContent: 'end', justifyItems: 'end' }}>
                    <MessageText>
                        <YouMessage> Ok, make a transfer to </YouMessage>

                    </MessageText>
                    <MessageTime>Apr 16</MessageTime>
                </MessageRow>

                <MessageRow style={{ justifyItems: 'start' }}>
                    <MessageContent>
                        <img src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg" style={{ borderRadius: '100%', gridRow: 'span 2' }} alt='other' />
                        <MessageText>
                            <OtherMessage> yeah i would like to purchase it </OtherMessage>
                        </MessageText>
                        <MessageTime>Apr 16</MessageTime>
                    </MessageContent>

                </MessageRow>
            </ChatMessageList>


            <ChatForm>
                <ImAttachment />
                <ChatInput type='text' placeholder='type a message' />
            </ChatForm>
        </ChatContainer>



    )
}

export default Chat