import React from 'react';
import style from './HireMe.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Button} from "../Button";
const HireMe = () => {
    return (
        <div className={style.hireMeBlock}>
            <div className={`${style.hireMeContainer} ${styleContainer.container}`}>
                <h2>ARE YOU READY TO START?</h2>
                <h3>I'm available for freelance projects.</h3>
                <Button title={'HIRE ME'}/>

            </div>

        </div>
    );
};

export default HireMe;