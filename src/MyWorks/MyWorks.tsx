import React from 'react';
import style from './MyWorks.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Work from "./Work/Work";
const MyWorks = () => {
    return (
        <div className={style.myWorksBlock}>
            <div className={`${style.workContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.works}>
                    <Work name={'TodoList'} description={'sdsds sdsdsd sdsdsd fdf f fdfdfgdfg dsdsd dsdsds sdsdsd sdsdsd sdsds sdsd sdsd !! fdfdfd dfdfdf dfdfd '}/>
                    <Work name={'SocialNetwork'} description={'dsdsd dsds dddds d saasaa'}/>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;
