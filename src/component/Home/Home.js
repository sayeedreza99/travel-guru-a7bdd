import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Home.css';
import { UserContext } from '../../App';

const Home = () => {
    return (
        <div className='home'>
            <div className="left-side">
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar is a city,fishing port,tourism center and district headquarters in southeastern Bangladesh. It is famous mostly for its natural sandy beach, and it...</p>
                <Link to='/contact'>
                    <Button variant="contained" className='logBtn' color="primary">Booking</Button>
                </Link>
            </div>
            <div className="right-side">
                <div className='card first-card'>
                    <div>
                        <h2>COX'S BAZAR</h2>
                    </div>
                </div>
                <div className='card second-card'>
                    <div>
                        <h2>SREEMONGOL</h2>
                    </div>
                </div>
                <div className='card third-card'>
                    <div>
                        <h2>SUNDARBAN</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;