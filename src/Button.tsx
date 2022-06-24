import React from 'react';
import style from './Button.module.css'

export type ButtonType = {
    title: string
}

export const Button = (props: ButtonType) => {
    return (
        <div >
            <button className={style.button}>{props.title}</button>
        </div>
    );
};

