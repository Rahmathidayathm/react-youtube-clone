import React from 'react';
import {
  Box
} from '@material-ui/core';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Recommendation from '../components/Recommendation';

const Home = () => {
    return (
        <React.Fragment>
        	<Header />
        	<Box display="flex">
        			<Sidebar />
        			<Recommendation />
        	</Box>
        </React.Fragment>
    );
};

export default Home;
