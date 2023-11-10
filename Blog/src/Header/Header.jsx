import {React, useState} from 'react';
import '../Header/Header.css';
import '../Header/MediaHeader.css';
import Finsweet from '../../Images/png/Logo.png';
import back2 from '../../Images/png/back2.png'
import { Link } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="header">
            <div className="navbar">
                <div className="navbar__logo">
                    <img src={Finsweet} alt="" />
                </div>
                <div className="burger__menu">
                    <span className="burger__item"></span>
                    <span className="burger__item"></span>
                    <span className="burger__item"></span>
                </div>
                <ul className='navbar__menu'>

                    <Link to="/">Home</Link>

                    <Link to="/blog">Blog</Link>

                    <Link to="/aboutus">About Us</Link>

                    <Link to="/contactus">Contact Us</Link>

                </ul>
                <button onClick={() => setOpen(true)}
                    className="navbar__btn">
                    Subscribe</button>
                {
                     open && (
                        <div className='modal'>

                            <div className="modal__content">
                                <form className="modal-col2 modal__1">

                                    <h1 className="authorization__h1">
                                        Create Account
                                    </h1>
                                    <label htmlFor="name">
                                        Введите имя пользователя!
                                    </label>
                                    <input
                                        id='name'
                                        pattern="\w{3,16}" required
                                        minlength="4" maxlength="18"
                                        type="name"
                                        placeholder='User name'
                                        title="4 to 18 lowercase letters"
                                        className="authorization__input-1 " />
                                    <label htmlFor="email">
                                        Введите Email
                                    </label>
                                    <input
                                        id='email'
                                        pattern="\w{3,16}" required
                                        minlength="4" maxlength="18"
                                        type="email"
                                        placeholder='Email'
                                        title="4 to 18 lowercase letters"
                                        className="authorization__input-2" />
                                    <label htmlFor="password">Не забудьте пароль</label>
                                    <input
                                        id='password'
                                        pattern="\w{3,16}" required
                                        minlength="4" maxlength="18"
                                        type="password"
                                        name='pin'
                                        placeholder='Password'
                                        title="4 to 18 lowercase letters"
                                        className="authorization__input-3" />

                                    <button className="authorization__btn">
                                        Sign Up
                                    </button>

                                    <p className="authorization__p">
                                        Or Sign up wit your social networks
                                    </p>


                                </form>
                                <div className="modal-col2 modal__2">

                                    <h1 className="authorization__h1">
                                        Welcom Back!
                                    </h1>

                                    <p className="authorization__p">
                                        To connect with us log in
                                    </p>

                                    <button className="authorization__btn">
                                        Sign in
                                    </button>
                                </div>
                            </div>


                            <div onClick={() => setOpen(false)} className="modal-close">
                                <img id='modal-back' src={back2} alt="" />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Header;
