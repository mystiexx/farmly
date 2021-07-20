import React, { useState } from 'react';
import { SideBarOption, LeftBar, LinkText } from './Sidebar.style';
import { MdHome, MdPerson } from 'react-icons/md';
import { AiFillShopping, AiFillHeart } from 'react-icons/ai';
import { GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';
import '../App.css'

function Sidebar() {
	const [ active, setActive ] = useState('Feed')
	return (
		<LeftBar>
			<div style={{ marginBottom: '30px' }}>
				<span style={{ fontFamily: 'snap itc regular', fontSize: '20px', color:'#775937'}}>Farmly</span>
			</div>

			<Link to="/user/feed" onClick={()=>setActive('Feed')}>
				<SideBarOption key='Feed' className={active === 'Feed' ? 'linkActive' : ''}>
					<div style={{ padding: '20px' }}>
						<MdHome style={{ fontSize: '30px' }} />
					</div>
					<LinkText >Home</LinkText>
				</SideBarOption>
			</Link>

			<Link to="/user/market" onClick={()=>setActive('Market')}>
				<SideBarOption key='Market' className={active === 'Market' ? 'linkActive' : ''}>
					<div style={{ padding: '20px' }}>
						<AiFillShopping style={{ fontSize: '30px',  }} />
					</div>
					<LinkText>Marketplace</LinkText>{' '}
				</SideBarOption>
			</Link>

			<Link to="/user/activity" onClick={()=>setActive('Activity')}>
				<SideBarOption key='Activity' className={active === 'Activity' ? 'linkActive' : ''}>
					<div style={{ padding: '20px' }}>
						<AiFillHeart style={{ fontSize: '30px' }} />
					</div>
					<LinkText>Activity</LinkText>
				</SideBarOption>
			</Link>
			<Link to="/user/profile" onClick={()=>setActive('Profile')}>
			<SideBarOption key='Profile' className={active === 'Profile' ? 'linkActive' : ''}>
				<div style={{ padding: '20px' }}>
					<MdPerson style={{ fontSize: '30px' }} />
				</div>
				<LinkText>Profile</LinkText>
			</SideBarOption>
			</Link>

<Link to='/'>
			<SideBarOption>
				<div style={{ padding: '20px' }}>
					<GoSignOut style={{ fontSize: '30px' }} />
				</div>
				<LinkText>Sign out</LinkText>
			</SideBarOption>
			</Link>
		</LeftBar>
	);
}

export default Sidebar;
