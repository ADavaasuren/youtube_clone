import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';




function Header() {
    const [inputSearch, setInputSearch] = useState('');



    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                        alt=""
                    />
                </Link>
                
            </div>

            <div className="header__input">
                <input 
                    onChange={e => setInputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder="Search"
                    type="text"
                />
                <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton" />
                </Link>    
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    alt="Ariunbold Davaasuren"
                    src="https://scontent-ams4-1.xx.fbcdn.net/v/t31.0-8/20414281_251647108677850_6300390231161956384_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=h-EHM-6DvaoAX-1sfDp&_nc_ht=scontent-ams4-1.xx&oh=a74fa4f263e88ced20222788554dfb64&oe=5FC0B911"
                />
            </div>

        </div>
    );
}

export default Header;