import React from 'react';
import style from './About.module.css'
import styleContainer from '../common/styles/Container.module.css'
import backgroundImage from '../assets/image/backgroung-image-main.jpg'


const About = () => {

    /*const backgroundMain = {
        backgroundImage: `url(${backgroundImage})`
    }*/
    return (
        <div className={style.mainBlock} /*style={backgroundMain}*/>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Dmitry</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
};

export default About;