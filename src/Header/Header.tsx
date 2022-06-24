import React from 'react';
import style from './Header.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Nav from "../Nav/Nav";
const Header = () => {
    return (
        <div className={style.header}>
            <div className={styleContainer.container}>
                <div className={style.headerNav}>
                    <Nav/>
                </div>
            </div>
        </div>
    );
};

export default Header;