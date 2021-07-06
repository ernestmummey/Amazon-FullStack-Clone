import React from 'react';
import '../Style/Header.css'



const Header = (props) => {
    return(
        <div className='header'>
            <div className="header__belt">
                <span className='header__logo'/>
                <span className='header__locationSprite'/>
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
                    <span className='header__searchIcon'/>
                </div>
                <div className="header__nav">
                    <div className="header__option">
                        <span className='header__optionLineOne'>
                            Hello Guest
                        </span>
                        <span className='header__optionLineTwo'>
                            Account & List
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
                    <div className='header__optionShoppingCart'>
                    <div className="header__optionShoppingCartLineOne">
                            <span className='header__optionShoppingCartCount'>0</span>
                            <span className='header__optionShoppingCartSprite'/>
                    </div>
                        <span className='header__optionShoppingCartLineTwo'>
                            cart
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