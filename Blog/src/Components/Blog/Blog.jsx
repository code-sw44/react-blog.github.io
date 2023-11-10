import React from 'react';
import '../Blog/Blog.scss'
import BlogContent from '../BlogContent/BlogContent';
import work from '../../../Images/png/work.png'
const Blog = () => {
    return (
        <>
            <div className="blog">
                <div className="blog__content">
                    <div className="blog__content__container">
                        <h3 className="blog__content__container__h3">
                            Featured Post</h3>
                        <h2 className="blog__content__container__h2">
                            Step-by-step guide to choosing great font pairs</h2>
                        <p className='blog__content__container__p1'>By <span>John Doe</span>   l   May 23, 2022 </p>
                        <p className='blog__content__container__p2'>Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident.</p>

                        <button className="blog__content__container__btn">
                            Read More {'>'}
                        </button>
                    </div>
                    <div className="blog__content__container">
                        <img src={work} alt="" />
                    </div>
                </div>
            </div>
            <BlogContent/>
        </>
    );
}

export default Blog;
