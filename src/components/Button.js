import React from 'react';
import generatedClass from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerator';

const Button = ({data}) => {
    const {content, style} = data;
    const className = generatedClass()
    styleGenerate(className, style)
    return <button className={className} dangerouslySetInnerHTML={{__html: content}} />
};

export default Button;