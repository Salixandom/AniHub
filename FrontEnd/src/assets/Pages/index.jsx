import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../CSS/style2.css';
import logo from '../../../public/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const index = () => {

    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show);
    };

    return (
        <section className="showcase">
            <header>
                <img src={logo} className='w-28' />
                <div className="navbar">
                    <div className="toggle" onClick={handleToggle}>
                        <span className={`toggle-icon ${show ? 'fade-out-bar' : 'fade-in-bar'}`}>
                            <FontAwesomeIcon icon={show ? faXmark : faBars} size="2x" />
                        </span>
                    </div>

                    {show && (<div className="dropdown">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/browse">Browse</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Signup</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </div>)}
                </div>
            </header>
            <video src="https://drive.google.com/file/d/1C0ewRsD6re7OSwqUWR8QXcEpO7v0_SjA/view?usp=sharing" loop autoPlay></video>
            <div className="overlay"></div>
            <div className="text">
                <h3>Welcome To</h3>
                <h2>AniHub!</h2>
                <p>Your go-to place for Anime knowledge</p>
                <Link to="/home">Explore</Link>
            </div>
            <ul className="social">
                <li><Link to="#"><FontAwesomeIcon icon={faFacebook} size="4x" /></Link></li>
                <li><Link to="#"><FontAwesomeIcon icon={faTwitter} size="4x" /></Link></li>
                <li><Link to="#"><FontAwesomeIcon icon={faInstagram} size="4x" /></Link></li>
            </ul>
        </section>
    );
};

export default index;
