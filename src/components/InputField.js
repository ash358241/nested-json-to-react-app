import React from 'react';
import generatedClass from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerator';

const InputField = ({data, style}) => {
    const className = generatedClass();
    const {id, name, label} = data;
    const {placeholder} = data.attr;
    styleGenerate(className, style)
    return(
        <>
        <label>{label}</label>
            <input className={className} name={name} id={id} label={label} type="text" placeholder={placeholder} />
        </>
    )
};

export default InputField;