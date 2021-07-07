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
            <div className="nav__main">
                <ul className='nav__list'>
                    <li className='nav__mainListLi'>Best Sellers</li>
                    <li className='nav__mainListLi'>Customer Service</li>
                    <li className='nav__mainListLi'>Prime</li>
                    <li className='nav__mainListLi'>New Releases</li>
                    <li className='nav__mainListLi'>Pharmacy</li>
                    <li className='nav__mainListLi'>Books</li>
                    <li className='nav__mainListLi'>Fashion</li>
                    <li className='nav__mainListLi'>Toys & Games</li>
                    <li className='nav__mainListLi'>Kindle Books</li>
                    <li className='nav__mainListLi'>Gift Cards</li>
                    <li className='nav__mainListLi'>Amazon Home</li>
                    <li className='nav__mainListLi'>Today's Deals</li>
                    <li className='nav__mainListLi'>Registry</li>
                    <li className='nav__mainListLi'>Sell</li>
                    <li className='nav__mainListLi'>Computers</li>
                    <li className='nav__mainListLi'>Video Games</li>
                    <li className='nav__mainListLi'>Find Gift</li>
                    <li className='nav__mainListLi'>Home Improvement</li>
                    <li className='nav__mainListLi'>Coupons</li>
                    <li className='nav__mainListLi'>Automotive</li>
                </ul>
            </div>
        </div>
    )
}


export default Header