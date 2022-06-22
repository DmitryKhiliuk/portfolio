import React from 'react';
import style from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Input} from "../Input";
import {Button} from "../Button";


const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <h2>Contacts</h2>
                <div className={style.forms}>
                    <Input name={'Name'}/>
                    <Input name={'E-mail'}/>
                    <textarea name="text" placeholder={'Message'}></textarea>
                </div>
                <Button title={'SEND'}/>

            </div>

        </div>
    );
};

export default Contacts;