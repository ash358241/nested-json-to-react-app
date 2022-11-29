import React from 'react';

const InputField = ({data}) => {
    const {id, name, label} = data;
    const {placeholder} = data.attr;
    return(
        <>
        <label>{label}</label>
            <input className={`${name}-${id}`} name={name} id={id} label={label} type="text" placeholder={placeholder} />
        </>
    )
};

export default InputField;