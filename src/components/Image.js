import React from 'react';
import generatedClass from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerator';

const Image = ({data}) => {
    const className = generatedClass()
    const imgSrc = data.attr.src
    styleGenerate(className, data.style)
    return <img src={imgSrc} alt="" className={className} />
};

export default Image;