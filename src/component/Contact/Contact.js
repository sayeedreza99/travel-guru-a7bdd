import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {

    const handleBooking = () => {

    }

    return (
        <div className='booking'>
            <div className="left-side">
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar is a city,fishing port,tourism center and district headquarters in southeastern Bangladesh. It is famous mostly for its natural sandy beach, and it..headquarters in southeastern Bangladesh. It is famous mostly for its natural sandy beach, and it..</p>
            </div>
            <div className="booking-form">
                <form onSubmit={handleBooking}>
                    <label for="origin">Origin</label>
                    <input type="text" name="origin" required />
                    <label for="destination">Destination</label>
                    <input type="text" name="destination" required />
                    <label for="form">Form</label>
                    <input type="date" name="date" required />
                    <label for="to">To</label>
                    <input type="date" name="to" required />
                    <Link to="/hotel">
                        <input type="submit" value="Start Booking" />
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Contact;