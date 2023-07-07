import React from 'react'
import { ReactComponent as ReactLogo } from '../assets/images/Logo.svg'
import { Routes, Route, Link } from 'react-router-dom';
import BookingPage from './BookingPage';
import Header from './Header';
import ConfirmedBooking from './ConfirmedBooking';


const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

function Nav() {
    return (
        <>
            <nav className='nav-container'>
                <div className='logo'>
                    <ReactLogo className='logo-img'></ReactLogo>
                </div>
                <div className='hamburger'>
                    <span className='lines'></span>
                    <span className='lines'></span>
                    <span className='lines'></span>
                </div>
                <ul id='nav-links'>
                    <li><a href='#' className='links'>
                        <Link to='/' className='nav-link'>Home</Link></a></li>
                    <li><a href='#about' className='links' onClick={handleClick("about")}>About</a></li>
                    <li><a href='#' className='links'>Menu</a></li>
                    <li><a href='#' className='links'><Link to='/reservations' className='nav-link'>Reservations</Link></a></li>
                    <li><a href='#' className='links'>Order Online</a></li>
                    <li><a href='#' className='links'>Login</a></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Header />} />

                <Route path='/reservations' element={<BookingPage />} />
                <Route path='/reservation-confirmed' element={<ConfirmedBooking />} />

            </Routes>
        </>
    )
}

export default Nav
