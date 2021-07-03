import React from 'react';
import '../Style/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const Header = (props) => {
    return(
        <div className='header'>
            <div className="header__belt">
                <img 
                    className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                />
                <div className="header__locationIcon">
                    <LocationOnOutlinedIcon className='header__locationIconOutlined'/>
                </div>
                <div className="header__locationOption">
                    <span className='header__locationOptionOne'>
                        Hello
                    </span>
                    <span className='header__locationOptionTwo'>
                        Select your address
                    </span>
                </div>
                <div className='header__search'>
                    <select className='header__searchSelect'>
                        <option>All Departments</option>
                    </select>
                    <input className='header__searchInput' type='text'/>
                    <SearchIcon className='header__searchIcon'/>
                </div>
                <div className="header__nav">
                    <div className="header__option">
                        <span className='header__optionLineOne'>
                            Hello Guest
                        </span>
                        <span className='header__optionLineTwo'>
                            Sign in
                        </span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLineOne'>
                            Returns
                        </span>
                        <span className='header__optionLineTwo'>
                            & Orders
                        </span>
                    </div>
                    <div className="header__option">
                        {/* icon */}
                        <span className='header__optionLineOne'>
                            Your
                        </span>
                    </div>
                </div>
            </div>
            {/* <div className="nav__main">
                <ul className='nav__list'>
                    <li>Best Sellers</li>
                    <li>Customer Service</li>
                    <li>Prime</li>
                    <li>New Releases</li>
                    <li>Pharmacy</li>
                    <li>Books</li>
                    <li>Fashion</li>
                    <li>Toys & Games</li>
                    <li>Kindle Books</li>
                    <li>Gift Cards</li>
                    <li>Amazon Home</li>
                    <li>Registry</li>
                    <li>Sell</li>
                    <li>Computers</li>
                    <li>Video Games</li>
                    <li>Find Gift</li>
                    <li>Home Improvement</li>
                    <li>Coupons</li>
                    <li>Automotive</li>
                    <li>Beauty & Personal Care</li>
                    <li>Smart Home</li>
                    <li>TV & Video</li>
                    <li>Amazon Basics</li>
                </ul>
            </div> */}
        </div>
    )
}


export default Header