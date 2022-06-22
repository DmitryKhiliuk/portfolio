import React from 'react';
import style from './Work.module.css'
import {Button} from "../../Button";

export type WorkType = {
    name: string
    description: string
}

const Work = (props: WorkType) => {
    return (
        <div className={style.workBlock}>
            <div className={style.workMain}>
                <Button title={'view'}/>
            </div>
            <div className={style.workText}>
                <div className={style.textName}>{props.name}</div>
                <div className={style.textDescription}>{props.description}</div>
            </div>
        </div>
    );
};

export default Work;