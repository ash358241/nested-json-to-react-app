import React from 'react';
import generatedClass from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerator';

const Button = ({data}) => {
    const {content, id, type} = data;
    // const className = generatedClass()
    // styleGenerate(className, style)
    return <button className={`dorik-${type}-${id}`}dangerouslySetInnerHTML={{__html: content}} />
};

export default Button;