import React from 'react';
import dollar from '../../assets/dollar 1.png';
import logo from './../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-2">
            <div className="flex-1 ml-3">
               <img src={logo} alt="" width={"50px"} height={"50px"} />
            </div>
            <div className="mr-3">
                <button className="flex gap-3">
                   0 Coin <img src={dollar} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;