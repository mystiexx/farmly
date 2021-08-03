import styled from 'styled-components';

export const MessageBody = styled.div`
	flex: 0.5;
	padding: 10px;
	min-width: fit-content;
`;
export const MessageBox = styled.div`
	padding: 10px;
`;

export const MessageHeader = styled.h3`
	font-size: 24px;
	font-weight: 500;
	font-family: poppins;
	color:  #261c15;
`;
export const MessageName = styled.h3`
	font-family: Poppins;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	letter-spacing: 0em;
	color:  #261c15;
	text-align: left;
`;

export const MessageTime = styled.h3`
	font-family: Poppins;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	color: #261c15;
`;
export const Message = styled.h4`
	font-family: Poppins;
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
	letter-spacing: 0em;
	text-align: left;
	color: #261c15;
`;

export const MessageContainer = styled.div`
	cursor: pointer;
	border-bottom: 1px solid #e6ecf0;

	&:hover {
		background-color: #e6ecf0;
		transition: color 100ms ease-out;
        border-radius: 5px;
		border: none;
	}
`;
