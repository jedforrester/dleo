import React from 'react';
import {Helmet} from 'react-helmet';
import './homepage.styles.scss';

import Directory from '../components/directory/directory.component';

const HomePage = () => (
    <div className='homepage'>
        <Helmet>
            <title>DAILY LIVING Essential Oils</title>
            <meta name="daily living with essential oils" content="daily hacks for your health, hormones, safe cleaning and essential oils"/>
        </Helmet>
        <Directory />
    </div>
)


export default HomePage;