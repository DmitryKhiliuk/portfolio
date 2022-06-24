import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import backgroundImage from '../assets/image/backgroung-image-main.jpg'
import {Button} from "../Button";


const Main = () => {

    /*const backgroundMain = {
        backgroundImage: `url(${backgroundImage})`
    }*/
    return (
        <div className={style.mainBlock} /*style={backgroundMain}*/>
            <div className={`${styleContainer.container} ${style.block}`}>
                <h1 className={style.title}>HELLO! I'M DMITRY, FRONT-END DEVELOPER</h1>
                <div className={style.text}>I am passionate about building excellent software that improves the lives of those around me.</div>
                <Button title={'Download CV'}/>
            </div>
        </div>
    );
};

export default Main;