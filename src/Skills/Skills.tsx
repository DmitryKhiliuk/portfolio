import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'lorem dsdsd sdsdsdsd sdsdsd sdsdsd sdsdsd sdsdsd s sdsdsd sdsdsddddd '}/>
                    <Skill title={'CSS'} description={'lorem inspun dsdsdsdsdsdsdsdsd'}/>
                    <Skill title={'React'} description={'Lorem5dsdsdsdsdsdsdsdsdsd'}/>
                </div>
            </div>
            
        </div>
    );
};

export default Skills;