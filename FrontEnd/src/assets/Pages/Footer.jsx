import React from "react";
import { Link } from 'react-router-dom';
import './../CSS/style.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="background-image"></div> {/* Background image moved outside */}

            <div className="footer-container">
                <div className="footer-heading">
                    <h2 className="az-title">A-Z List</h2>
                    <p className="az-subtitle">Searching anime order by alphabet name A to Z.</p>
                </div>

                <nav className="alphabet-list">
                    <Link to={{ pathname: "/search", search: 'Any' }}>All</Link>
                    <Link to={{ pathname: "/search", search: '1' }}>0-9</Link>
                    {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map(letter => (
                        <Link key={letter} to={{ pathname: "/search", search: letter }}>{letter}</Link>
                    ))}
                </nav>

                <div className="footer-branding">
                    <Link to="/" className="footer-logo hover:text-purple-500">AniHub</Link>
                </div>

                <div className="footer-links">
                    <p className="mr-3 text-gray-400">Help</p>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/request">Request</Link>
                </div>

                <div className="footer-links mb-6">
                    <p className="mr-3 text-gray-400">Inspired By</p>
                    <Link to="https://myanimelist.net/" target="_blank">MAL</Link>
                    <Link to="https://aniwave.to/" target="_blank">AniWave</Link>
                    <Link to="https://anilist.co/" target="_blank">AniList</Link>
                </div>

                <div className="copyright-section">
                    <p className="copyright-text">Copyright © AniHub.co All Rights Reserved</p>
                    <p className="filecopy-text">This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
