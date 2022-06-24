import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={`${style.item} ${style.active}`} href="">Home</a>
            <a className={style.item} href="">About</a>
            <a className={style.item} href="">Skills</a>
            <a className={style.item} href="">My Work</a>
            <a className={style.item} href="">Contacts</a>
        </div>
    );
};

export default Nav;