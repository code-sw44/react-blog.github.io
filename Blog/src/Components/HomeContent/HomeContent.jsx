import React from 'react';
import './HomeContent.css'
import post from '../../../Images/jpg/post.jpg'
const HomeContent = () => {
    return (
        <div className='home_content'>
            <div className="home__posts">
                <div className="home__post Featured-Post">
                    <h1 className='home__post__h1'>Featured Post</h1>

                    <img src={post} alt="" />
                    <div className="home__post_box">
                        <p>By <span>John Doe</span>  |  May 23, 2022 </p>

                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
                        <p>Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur
                            sint occaecat cupidatat non proident.
                        </p>
                        <button>Read More {`>`} </button>
                    </div>

                </div>
                <div className="home__post All-Posts">
                    <h1 className='home__post__h1'>All Posts</h1>
                    <div className="row row__box">

                        
                        <div className="col-4 col-4_№1">
                            <p className='home__post__p'>By <span>John Doe</span>   Aug 23, 2021 </p>
                            <h2 className='home__post__h2'>
                                8 Figma design systems that you can download for free today.
                            </h2>
                        </div>
                        <div className="col-4 col-4_№2">
                              <p className='home__post__p'>By <span>John Doe</span>   Aug 23, 2021 </p>
                            <h2 className='home__post__h2'>
                                8 Figma design systems that you can download for free today.
                            </h2>
                        </div>
                        <div className="col-4 col-4_№3">
                              <p className='home__post__p'>By <span>John Doe</span>   Aug 23, 2021 </p>
                            <h2 className='home__post__h2'>
                                8 Figma design systems that you can download for free today.
                            </h2>
                        </div>

                        <div className="col-4  col-4_№4  ">
                              <p className='home__post__p'>By <span>John Doe</span>   Aug 23, 2021 </p>
                            <h2 className='home__post__h2'>
                                8 Figma design systems that you can download for free today.
                            </h2>
                        </div>
                        <div className="col-4  col-4_№4  ">
                              <p className='home__post__p'>By <span>John Doe</span>   Aug 23, 2021 </p>
                            <h2 className='home__post__h2'>
                                8 Figma design systems that you can download for free today.
                            </h2>
                        </div>
                      
                        <div className="col-4  col-4_№4  ">
                              <p className='home__post__p'>By <span>John Doe</span>   Aug 23, 2021 </p>
                            <h2 className='home__post__h2'>
                                8 Figma design systems that you can download for free today.
                            </h2>
                        </div>
                        <div className="col-4  col-4_№4  ">
                              <p className='home__post__p'>By <span>John Doe</span>   Aug 23, 2021 </p>
                            <h2 className='home__post__h2'>
                                8 Figma design systems that you can download for free today.
                            </h2>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;
