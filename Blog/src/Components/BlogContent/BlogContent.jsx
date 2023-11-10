import React from 'react';
import '../BlogContent/BlogContent.scss'
import blog1 from '../../../Images/png/blog-1.png'
import blog2 from '../../../Images/png/blog-2.png'
import blog3 from '../../../Images/png/blog-3.png'
import blog4 from '../../../Images/png/blog-4.png'
const BlogContent = () => {
    return (
        <>
            <div className="blog">
                <div className="blog__container">
                    <h1 className="blog__container__h1">All posts</h1>

                    <div className="blog__container__row">
                        <div className="col-5">
                            <img src={blog1} alt="" />
                            <div className="col-5__text">
                                <h3 className='col-5__h3'>Startup</h3>
                                <h2 className='col-5__h2'>
                                    Design tips for designers that cover everything you need
                                </h2>
                                <p className='col-5__p'>
                                    Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>

                        </div>
                        <div className="col-5">
                            <img src={blog2} alt="" />
                            <div className="col-5__text">
                                <h3 className='col-5__h3'>Startup</h3>
                                <h2 className='col-5__h2'>
                                    Design tips for designers that cover everything you need
                                </h2>
                                <p className='col-5__p'>
                                    Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>

                        </div>
                        <div className="col-5">
                            <img src={blog3} alt="" />
                            <div className="col-5__text">
                                <h3 className='col-5__h3'>BUSINESS</h3>
                                <h2 className='col-5__h2'>
                                    How to build rapport with your web design clients
                                </h2>
                                <p className='col-5__p'>
                                    Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>

                        </div>
                        <div className="col-5">
                            <img src={blog4} alt="" />
                            <div className="col-5__text">
                                <h3 className='col-5__h3'>Startup</h3>
                                <h2 className='col-5__h2'>
                                    Logo design trends to avoid in 2022
                                </h2>
                                <p className='col-5__p'>
                                    Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>

                        </div>



                        <div className="col-5">
                            <img src={blog1} alt="" />
                            <div className="col-5__text">
                                <h3 className='col-5__h3'>ECONOMY</h3>
                                <h2 className='col-5__h2'>
                                    Font sizes in UI design: The complete guide to follow
                                </h2>
                                <p className='col-5__p'>
                                    Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-5">
                            <img src={blog1} alt="" />
                            <div className="col-5__text">
                                <h3 className='col-5__h3'>ECONOMY</h3>
                                <h2 className='col-5__h2'>
                                    Font sizes in UI design: The complete guide to follow
                                </h2>
                                <p className='col-5__p'>
                                    Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>
                        </div>

                        {/* <div className="blog__container__row__box">
                            <button className="blog__container__row__box__btn">{'<'} </button>
                            <button className="blog__container__row__box__btn"> {'>'}</button>
                        </div> */}
                    </div>
                </div>



                <div className="categories">
                    <div className="categories__h2">All Categories</div>
                    <div className="categories__row">

                        <div className="categories__row__col-4">
                            <div className="categories__row__col-4__image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <path d="M25.0305 13.914L14.04 12.2445C13.53 12.165 13.0095 12.3045 12.6195 12.6345C12.2295 12.975 12 13.464 12 13.974V35.0445C12 35.595 12.45 36.045 13.0005 36.045H16.251V30.795C16.251 29.8245 17.031 29.0445 18.0015 29.0445H20.502C21.4725 29.0445 22.2525 29.8245 22.2525 30.795V36.045H26.502V15.645C26.5005 14.784 25.8795 14.055 25.0305 13.914ZM17.5005 26.7945H16.0005C15.5865 26.7945 15.2505 26.4585 15.2505 26.0445C15.2505 25.6305 15.5865 25.2945 16.0005 25.2945H17.5005C17.9145 25.2945 18.2505 25.6305 18.2505 26.0445C18.2505 26.4585 17.9145 26.7945 17.5005 26.7945ZM17.5005 23.7945H16.0005C15.5865 23.7945 15.2505 23.4585 15.2505 23.0445C15.2505 22.6305 15.5865 22.2945 16.0005 22.2945H17.5005C17.9145 22.2945 18.2505 22.6305 18.2505 23.0445C18.2505 23.4585 17.9145 23.7945 17.5005 23.7945ZM17.5005 20.7945H16.0005C15.5865 20.7945 15.2505 20.4585 15.2505 20.0445C15.2505 19.6305 15.5865 19.2945 16.0005 19.2945H17.5005C17.9145 19.2945 18.2505 19.6305 18.2505 20.0445C18.2505 20.4585 17.9145 20.7945 17.5005 20.7945ZM17.5005 17.7945H16.0005C15.5865 17.7945 15.2505 17.4585 15.2505 17.0445C15.2505 16.6305 15.5865 16.2945 16.0005 16.2945H17.5005C17.9145 16.2945 18.2505 16.6305 18.2505 17.0445C18.2505 17.4585 17.9145 17.7945 17.5005 17.7945ZM22.5 26.7945H21C20.586 26.7945 20.25 26.4585 20.25 26.0445C20.25 25.6305 20.586 25.2945 21 25.2945H22.5C22.914 25.2945 23.25 25.6305 23.25 26.0445C23.25 26.4585 22.914 26.7945 22.5 26.7945ZM22.5 23.7945H21C20.586 23.7945 20.25 23.4585 20.25 23.0445C20.25 22.6305 20.586 22.2945 21 22.2945H22.5C22.914 22.2945 23.25 22.6305 23.25 23.0445C23.25 23.4585 22.914 23.7945 22.5 23.7945ZM22.5 20.7945H21C20.586 20.7945 20.25 20.4585 20.25 20.0445C20.25 19.6305 20.586 19.2945 21 19.2945H22.5C22.914 19.2945 23.25 19.6305 23.25 20.0445C23.25 20.4585 22.914 20.7945 22.5 20.7945ZM22.5 17.7945H21C20.586 17.7945 20.25 17.4585 20.25 17.0445C20.25 16.6305 20.586 16.2945 21 16.2945H22.5C22.914 16.2945 23.25 16.6305 23.25 17.0445C23.25 17.4585 22.914 17.7945 22.5 17.7945Z" fill="#232536" />
                                    <path d="M34.6205 22.887L27.5 21.396V36.045H34.25C35.2145 36.045 36.0005 35.2605 36.0005 34.2945V24.597C36.0005 23.7705 35.4365 23.067 34.6205 22.887ZM32.2505 33.045H30.7505C30.3365 33.045 30.0005 32.709 30.0005 32.295C30.0005 31.881 30.3365 31.545 30.7505 31.545H32.2505C32.6645 31.545 33.0005 31.881 33.0005 32.295C33.0005 32.709 32.6645 33.045 32.2505 33.045ZM32.2505 30.045H30.7505C30.3365 30.045 30.0005 29.709 30.0005 29.295C30.0005 28.881 30.3365 28.545 30.7505 28.545H32.2505C32.6645 28.545 33.0005 28.881 33.0005 29.295C33.0005 29.709 32.6645 30.045 32.2505 30.045ZM32.2505 27.045H30.7505C30.3365 27.045 30.0005 26.709 30.0005 26.295C30.0005 25.881 30.3365 25.545 30.7505 25.545H32.2505C32.6645 25.545 33.0005 25.881 33.0005 26.295C33.0005 26.709 32.6645 27.045 32.2505 27.045Z" fill="#FFD050" />
                                </svg>
                            </div>
                            <h3 className="categories__row__col-4__h3">Business</h3>
                            <p className="categories__row__col-4__p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>

                        <div className="categories__row__col-4">
                            <div className="categories__row__col-4__image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <g clippath="url(#clip0_847_742)">
                                        <path d="M5.85054 6.21143L3.85792 6.36537C3.30345 6.40823 2.80963 6.69882 2.50299 7.16264L0.204943 10.6383C-0.0276155 10.99 -0.0645859 11.4302 0.105981 11.8158C0.276593 12.2014 0.627205 12.4702 1.04385 12.5347L2.86834 12.8173C3.29514 10.5523 4.31683 8.29295 5.85054 6.21143Z" fill="#FFD050" />
                                        <path d="M10.1836 20.1316L10.4662 21.9561C10.5307 22.3728 10.7995 22.7234 11.185 22.8939C11.3454 22.9649 11.5152 22.9999 11.6842 22.9999C11.9215 22.9999 12.1572 22.9308 12.3626 22.795L15.8384 20.497C16.3022 20.1903 16.5928 19.6964 16.6355 19.142L16.7895 17.1494C14.7079 18.6832 12.4486 19.7049 10.1836 20.1316Z" fill="#FFD050" />
                                        <path d="M9.49658 18.8665C9.55992 18.8665 9.62362 18.8613 9.68718 18.8507C10.6361 18.6921 11.5507 18.4248 12.4232 18.0749L4.92442 10.5762C4.57457 11.4486 4.30729 12.3632 4.14863 13.3122C4.0861 13.6862 4.21156 14.0673 4.4797 14.3355L8.66387 18.5196C8.8865 18.7422 9.18698 18.8665 9.49658 18.8665Z" fill="#FFD050" />
                                        <path d="M21.1661 10.1973C23.0011 6.64969 23.069 2.90072 22.9731 1.14249C22.9403 0.540047 22.46 0.0597456 21.8575 0.026908C21.5712 0.0112753 21.2319 0 20.8495 0C18.8835 0 15.7726 0.297785 12.8027 1.83397C10.4424 3.0548 7.34745 5.74295 5.52148 9.27567C5.54305 9.29251 5.56411 9.31039 5.58397 9.33025L13.6698 17.4161C13.6897 17.436 13.7075 17.457 13.7244 17.4786C17.2571 15.6525 19.9453 12.5576 21.1661 10.1973ZM13.3731 4.86231C14.6866 3.54876 16.8241 3.54862 18.1377 4.86231C18.7741 5.49862 19.1245 6.34472 19.1245 7.24463C19.1245 8.14454 18.7741 8.99064 18.1377 9.62695C17.481 10.2837 16.618 10.6121 15.7554 10.6122C14.8925 10.6122 14.03 10.2838 13.3731 9.62695C12.7367 8.99064 12.3863 8.14454 12.3863 7.24463C12.3863 6.34472 12.7367 5.49862 13.3731 4.86231Z" fill="#232536" />
                                        <path d="M14.3264 8.67403C15.1146 9.46218 16.3971 9.46223 17.1853 8.67403C17.5671 8.29219 17.7773 7.78458 17.7773 7.24462C17.7773 6.70466 17.5671 6.19704 17.1853 5.81525C16.7912 5.42115 16.2735 5.22412 15.7559 5.22412C15.2382 5.22412 14.7205 5.42115 14.3265 5.81525C13.9447 6.19704 13.7344 6.70466 13.7344 7.24462C13.7344 7.78458 13.9447 8.29224 14.3264 8.67403Z" fill="#232536" />
                                        <path d="M0.687523 18.9539C0.859978 18.9539 1.03243 18.8881 1.16396 18.7565L3.36392 16.5565C3.62708 16.2934 3.62708 15.8668 3.36392 15.6036C3.10082 15.3405 2.67415 15.3405 2.411 15.6036L0.211036 17.8036C-0.0521162 18.0667 -0.0521162 18.4934 0.211036 18.7565C0.342612 18.8881 0.515068 18.9539 0.687523 18.9539Z" fill="#FFD050" />
                                        <path d="M5.37991 17.6202C5.1168 17.3571 4.69014 17.3571 4.42698 17.6202L0.197364 21.8498C-0.0657881 22.113 -0.0657881 22.5396 0.197364 22.8028C0.32894 22.9343 0.501396 23.0001 0.673851 23.0001C0.846306 23.0001 1.01876 22.9343 1.15029 22.8027L5.37987 18.5731C5.64306 18.31 5.64306 17.8834 5.37991 17.6202Z" fill="#FFD050" />
                                        <path d="M6.4422 19.6358L4.24229 21.8358C3.97913 22.099 3.97913 22.5256 4.24229 22.7887C4.37386 22.9203 4.54632 22.9861 4.71873 22.9861C4.89114 22.9861 5.06364 22.9203 5.19517 22.7887L7.39513 20.5888C7.65828 20.3256 7.65828 19.899 7.39513 19.6358C7.13202 19.3727 6.70535 19.3727 6.4422 19.6358Z" fill="#FFD050" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_847_742">
                                            <rect width="23" height="23" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="categories__row__col-4__h3">Startup</h3>
                            <p className="categories__row__col-4__p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>

                        <div className="categories__row__col-4">
                            <div className="categories__row__col-4__image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                                    <g clipPath="url(#clip0_847_723)">
                                        <path d="M5.11557 15.4253H2.53171C1.5999 15.4253 0.841797 16.2179 0.841797 17.192V22.915C0.841797 23.5133 1.30738 24 1.87959 24H5.76759C6.33985 24 6.80544 23.5133 6.80544 22.915V17.1921C6.80544 16.2179 6.04738 15.4253 5.11557 15.4253Z" fill="#232536" />
                                        <path d="M12.6996 11.9492H10.1157C9.18389 11.9492 8.42578 12.7418 8.42578 13.7159V22.9148C8.42578 23.5131 8.89137 23.9998 9.46363 23.9998H13.3516C13.9239 23.9998 14.3894 23.5131 14.3894 22.9148V13.7159C14.3894 12.7417 13.6314 11.9492 12.6996 11.9492Z" fill="#232536" />
                                        <path d="M20.4261 7.98877H17.8423C16.9104 7.98877 16.1523 8.78133 16.1523 9.75545V22.9148C16.1523 23.5131 16.6179 23.9998 17.1901 23.9998H21.0781C21.6504 23.9998 22.1159 23.5131 22.1159 22.9148V9.75545C22.116 8.78133 21.3579 7.98877 20.4261 7.98877Z" fill="#232536" />
                                        <path d="M18.3681 0.668159C18.052 0.201095 17.538 -0.0458895 16.9929 0.00642311L12.1128 0.478455C11.5678 0.53119 11.1059 0.872909 10.8771 1.39261C10.6483 1.91232 10.7004 2.50149 11.0165 2.96855L11.2889 3.37102L5.23176 7.74677L5.22557 7.75131C4.79576 8.06927 4.51015 8.54322 4.42133 9.0858C4.33251 9.62838 4.45106 10.1746 4.75519 10.624C5.05932 11.0733 5.51266 11.3719 6.03165 11.4648C6.1441 11.4849 6.25669 11.4949 6.36851 11.4949C6.77133 11.4949 7.1637 11.3657 7.49957 11.1184L13.5664 6.73572L13.8476 7.15108C14.1357 7.57666 14.588 7.8198 15.0783 7.8198C15.1261 7.8198 15.1743 7.81745 15.2228 7.81281C15.7677 7.76008 16.2297 7.41831 16.4585 6.89856L18.5076 2.2441C18.7364 1.7243 18.6843 1.13518 18.3681 0.668159Z" fill="#FFD050" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_847_723">
                                            <rect width="22.9565" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="categories__row__col-4__h3">Economy</h3>
                            <p className="categories__row__col-4__p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>

                        <div className="categories__row__col-4">
                            <div className="categories__row__col-4__image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_847_712)">
                                        <path d="M15.5176 7.03125C15.5176 7.80647 16.1486 8.4375 16.9238 8.4375H21.1042C21.0283 7.44788 20.7988 6.50213 20.4316 5.625H16.9238C16.1486 5.625 15.5176 6.25603 15.5176 7.03125Z" fill="#232536" />
                                        <path d="M6.37695 24H14.8145C15.2031 24 15.5176 23.6855 15.5176 23.2969V19.6875H16.9238V15.1172L9.893 9.84375H3.56445C3.17581 9.84375 2.86133 10.1582 2.86133 10.5469C2.86133 13.0373 3.88236 15.4228 5.67383 17.1428V23.2969C5.67383 23.6855 5.98831 24 6.37695 24Z" fill="#FFD050" />
                                        <path d="M12.002 0C11.6133 0 11.2988 0.314484 11.2988 0.703125V1.40625H8.35681C8.06558 0.589594 7.29242 0 6.37695 0C5.2138 0 4.26758 0.946219 4.26758 2.10938C4.26758 3.27253 5.2138 4.21875 6.37695 4.21875C7.29242 4.21875 8.06558 3.62916 8.35681 2.8125H11.2988V5.625H4.13806C3.84683 4.80834 3.07367 4.21875 2.1582 4.21875C0.995047 4.21875 0.00195312 5.16497 0.00195312 6.32812C0.00195312 7.49128 0.995047 8.4375 2.1582 8.4375C3.07367 8.4375 3.84683 7.84791 4.13806 7.03125H11.2988V9.14095L18.0485 14.2033C18.2257 14.3358 18.3301 14.5445 18.3301 14.7656V19.6875H19.0332C20.1964 19.6875 21.1426 18.7413 21.1426 17.5781V14.0625H23.2988C23.5584 14.0625 23.7966 13.9197 23.9189 13.691C24.0411 13.4624 24.0274 13.185 23.8839 12.9693L21.7533 9.84375H16.9238C15.3727 9.84375 14.1113 8.58239 14.1113 7.03125C14.1113 5.48011 15.3727 4.21875 16.9238 4.21875H19.6897C18.0628 1.68647 15.2291 0 12.002 0V0Z" fill="#232536" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_847_712">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="categories__row__col-4__h3">Technology</h3>
                            <p className="categories__row__col-4__p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                </div>


                <div className='row'>
                    <div className="row__col-1">
                        <h2 className="row__col-1__h2">
                            Join our team to be a part of our story
                        </h2>
                        <p className="row__col-1__p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <button className="row__col-1__btn">Join Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogContent;
