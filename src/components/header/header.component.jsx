import React from 'react';

import './header.styles.scss';

import { Link } from 'react-router-dom';

import logoimg from '../../assets/logo.png';

const Header = () => (
    <div className='header'>
    <div className='logo-container'>
        <Link to="/">
            <img src={logoimg} alt="Logo" className='logo-img'/>
        </Link>
    </div>
    <div className='logo-title'>
        DAILY LIVING ESSENTIAL OILS
    </div>
    <div className='options'>
        <Link className='option' to='/daily-hacks'>
            DAILY HACKS
        </Link>
        <Link className='option' to='/health-and-wellness'>
            HEALTH & WELLNESS
        </Link>
        <Link className='option' to='/cleaning-and-diffusing'>
            CLEANING & DIFFUSING
        </Link>
        <Link className='option' to='/get-started'>
            GET STARTED!
        </Link>
    </div>
    </div>
);

export default Header