import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css';

function Header() {
    return (
        <div className={style.menu}>
            <div><NavLink to="/pre-junior">PreJunior</NavLink></div>
            <div><NavLink to="/junior">Junior</NavLink></div>
            <div><NavLink to="/junior-plus">JuniorPlus</NavLink></div>
        </div>
    );
}

export default Header;
