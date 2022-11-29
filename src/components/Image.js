import React from 'react';
import generatedClass from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerator';

const Image = ({data, className}) => {
    // const className = generatedClass()
    // const imgSrc = data.attr.src
    // styleGenerate(className, data.style)
    // return <img src={imgSrc} alt="" className={className} />
    const { attr } = data;
    return <img className={className} {...attr} alt={attr.alt} />;
};

export default Image;