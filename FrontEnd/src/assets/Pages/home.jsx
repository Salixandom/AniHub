import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from '../FeatuedSlider';
import CSlider from '../AnimeSlider';
import { useSelector } from 'react-redux';
import { Navigation, Footer } from './imports';
import './../CSS/style.css';
import { BASE_URL } from '../../config';

const Home = () => {
    const user = useSelector((state) => state.auth.user);

    const [featuredAnimeSlides, setFeaturedAnimeSlides] = useState([]);
    const [newRelease, setNewRelease] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [newAdded, setNewAdded] = useState([]);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/home/getFeaturedAnime`)
            .then((response) => {
                const data = response.data;
                console.log("✅ Connected to backend! Data:", response.data);
                setFeaturedAnimeSlides(Array.isArray(data) ? data : []);
            })
            .catch((error) => {
                console.error('Error fetching featured animes: ', error);
            });

        axios.get(`${BASE_URL}/home/getNewRelease`)
            .then((response) => {
                const data = response.data;
                setNewRelease(Array.isArray(data) ? data : []);
            })
            .catch((error) => {
                console.error('Error fetching new release animes: ', error);
            });

        axios.get(`${BASE_URL}/home/getUpcoming`)
            .then((response) => {
                const data = response.data;
                setUpcoming(Array.isArray(data) ? data : []);
            })
            .catch((error) => {
                console.error('Error fetching upcoming animes: ', error);
            });

        axios.get(`${BASE_URL}/home/getNewAdded`)
            .then((response) => {
                const data = response.data;
                setNewAdded(Array.isArray(data) ? data : []);
            })
            .catch((error) => {
                console.error('Error fetching new added animes: ', error);
            });

        if (user) {
            axios.get(`${BASE_URL}/home/recommendations/${user.user_id}`)
                .then((response) => {
                    const data = response.data;
                    setRecommendations(Array.isArray(data) ? data : []);
                })
                .catch((error) => {
                    console.error('Error fetching recommendations: ', error);
                });
        }
    }, [user]);

    return (
        <>
            <Navigation />
            <main className="py-5 px-4 bg-gray-800">
                <section className="browse-section">
                    <div className='browse-anime-list2'>
                        {Array.isArray(featuredAnimeSlides) && (
                            <Slider slides={featuredAnimeSlides} />
                        )}
                    </div>
                </section>

                {user && (
                    <section className="browse-section trending">
                        <div className="browse-section-header">
                            <h2 className='text-2xl font-bold'>BORED? WATCH THIS...</h2>
                        </div>
                        <div className="browse-anime-list">
                            {Array.isArray(recommendations) && (
                                <CSlider slides={recommendations} slideCount={6} />
                            )}
                        </div>
                    </section>
                )}

                <section>
                    <div className="home-anime-container">
                        <div className="home-anime-column bg-gray-700">
                            <h3>NEW RELEASE</h3>
                            {Array.isArray(newRelease) && newRelease.map((release) => (
                                <Link to={`/anime/${release.anime_id}`} key={release.anime_id}>
                                    <div className="home-anime-card">
                                        <img src={release.cover_image} alt={release.title} className="home-anime-image" />
                                        <div className="home-anime-info">
                                            <h4>{release.title}</h4>
                                            <div className='flex'>
                                                <p className='text-gray-400'>{release.showtype || 'N/A'}</p>
                                                <span className='px-2 font-extrabold text-gray-400'>.</span>
                                                <p className='text-gray-400'>{release.source || 'N/A'}</p>
                                                <span className='px-2 font-extrabold text-gray-400'>.</span>
                                                <p className='text-gray-400'>{release.release_date || 'N/A'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="home-anime-column">
                            <h3>NEW ADDED</h3>
                            {Array.isArray(newAdded) && newAdded.map((up) => (
                                <Link to={`/anime/${up.anime_id}`} key={up.anime_id}>
                                    <div className="home-anime-card2">
                                        <img src={up.cover_image} alt={up.title} className="home-anime-image" />
                                        <div className="home-anime-info">
                                            <h4>{up.title}</h4>
                                            <p className="text-gray-400">Release Date: {up.release_date || 'N/A'}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="home-anime-column bg-gray-700">
                            <h3>UPCOMING</h3>
                            {Array.isArray(upcoming) && upcoming.map((up) => (
                                <Link to={`/anime/${up.anime_id}`} key={up.anime_id}>
                                    <div className="home-anime-card3">
                                        <img src={up.cover_image} alt={up.title} className="home-anime-image" />
                                        <div className="home-anime-info">
                                            <h4>{up.title}</h4>
                                            <div className='flex'>
                                                <p className='text-gray-400'>{up.showtype || 'N/A'}</p>
                                                <span className='px-2 font-extrabold text-gray-400'>.</span>
                                                <p className='text-gray-400'>{up.source || 'N/A'}</p>
                                                <span className='px-2 font-extrabold text-gray-400'>.</span>
                                                <p className='text-gray-400'>{up.release_date || 'N/A'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
