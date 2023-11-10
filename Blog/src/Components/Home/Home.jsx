import React from 'react';
import './Home.css'
import HomeContent from './../HomeContent/HomeContent';
const Home = () => {
    return (
        <>
            <div className="home__body">
                <div className='home'>
                    <div className="home__container">
                        <h6>Posted on startup</h6>
                        <h1>Step-by-step guide to choosing great font pairs</h1>
                        <p>By <span>James West</span>  |  May 23, 2022 </p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur
                            sint occaecat cupidatat non proident.
                        </p>
                        <button>Read More {`>`} </button>
                    </div>
                </div>
            </div>

            <HomeContent />

        </>
    );
}



export default Home;

