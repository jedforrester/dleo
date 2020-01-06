import React from 'react';

import './header.styles.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo} from '../../assets/crown.svg';
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
        <Link className='option' to='/dailyhacks'>
            DAILY HACKS
        </Link>
        <Link className='option' to='/cleaninganddiffusing'>
                CLEANING & DIFFUSING
        </Link>
        <Link className='option' to='/healthandwellness'>
            HEALTH & WELLNESS
        </Link>
        <Link className='option' to='/getstarted'>
                GET STARTED!
        </Link>
    </div>
    </div>
);

export default Header;