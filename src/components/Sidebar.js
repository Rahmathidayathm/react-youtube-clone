import React from 'react';
import {
	Box,
	Typography
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

const useStyles = makeStyles(() => ({
	btnContainer: {
		height: 70,
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'lightgray'
		}
	}
}))

const Sidebar = () => {
	const classes = useStyles();
    return (
		<Box display="flex" flexDirection="column" flex={0.1} style={{backgroundColor: '#fff'}}>
			<Box display="flex" justifyContent="center" alignItems="center" className={classes.btnContainer} flexDirection="column" mb={3} style={{position: 'sticky', top: 0}}>
				<HomeIcon fontSize="large" />
				<Typography variant="subtitle3">Beranda</Typography>
			</Box>
			<Box display="flex" justifyContent="center" alignItems="center" className={classes.btnContainer} px={3} flexDirection="column" mb={3}>
				<WhatshotIcon fontSize="large" />
				<Typography variant="subtitle3">Trending</Typography>
			</Box>
			<Box display="flex" justifyContent="center" alignItems="center" className={classes.btnContainer} px={3} flexDirection="column" mb={3}>
				<SubscriptionsIcon fontSize="large" />
				<Typography variant="subtitle3">Subscription</Typography>
			</Box>
			<Box display="flex" justifyContent="center" alignItems="center" className={classes.btnContainer} px={3} flexDirection="column" mb={3}>
				<VideoLibraryIcon fontSize="large" />
				<Typography variant="subtitle3">Koleksi</Typography>
			</Box>
		</Box>        
    );
};

export default Sidebar;
