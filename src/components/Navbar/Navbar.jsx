import React from 'react';
import dollar from '../../assets/dollar 1.png';
import logo from './../../assets/logo.png'

const Navbar = ({coin}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-2 mx-auto rounded-2xl">
            <div className="flex-1 ml-3">
               <img src={logo} alt="" width={"50px"} height={"50px"} />
            </div>
            <div className="mr-2">
                <button className="flex gap-1">
                {coin}<img src={dollar} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;