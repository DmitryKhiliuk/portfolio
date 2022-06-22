import React from 'react';

export type InputType = {
    name: string

}

export const Input = (props: InputType) => {
    
    return (
        <div>
            <input type='text' placeholder={props.name}/>
        </div>
    );
};

