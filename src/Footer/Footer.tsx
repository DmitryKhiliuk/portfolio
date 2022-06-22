import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Button} from "../Button";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${style.footerContainer} ${styleContainer.container}`}>
                <h2 className={style.text}>Dmitry Khiliuk</h2>
                <div className={style.networks}>
                    <div className={style.network}></div>
                    <div className={style.network}></div>
                    <div className={style.network}></div>
                    <div className={style.network}></div>
                </div>
                <h3 className={style.text}>© 2022 All rights reserved</h3>

            </div>

        </div>
    );
};

export default Footer;