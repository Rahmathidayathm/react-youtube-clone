import React from 'react';

import {
	Box,
	Avatar
} from '@material-ui/core';
import logo from '../assets/logo.jpg';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (
        <Box display="flex" style={{height: 50, position: 'sticky', top: 0, zIndex: 999, backgroundColor: '#fff'}} justifyContent="space-between" py={2} px={6}>
			<Box display="flex" style={{width: '13%'}} alignItems="center" justifyContent="space-between">
				<MenuIcon fontSize="large" />
				<img src={logo} style={{maxWidth: 120}} alt=""/>
			</Box>
			<Box display="flex" style={{width: '50%', border: '1px solid black'}} alignItems="center">
				<input type="text" style={{ width: '100%', height: '100%', border: 'none' }}/>
				<Box display="flex" justifyContent="center" alignItems="center" style={{backgroundColor: '#fafafa', height: '100%',width: 100,borderLeft: '1px solid lightgray', cursor: 'pointer'}}>
					<SearchIcon style={{fontSize: 30, color: 'gray'}} />
				</Box>
			</Box>
			<Box display="flex" alignItems="center" style={{width: '15%'}} justifyContent="space-between">
				<VideoCallIcon fontSize="large" />
				<AppsIcon fontSize="large" />
				<NotificationsIcon fontSize="large" />
				<Avatar />
			</Box>
        </Box>
    );
};

export default Header;
