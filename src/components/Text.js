import React from 'react';
import generatedClass from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerator';

const Text = ({data, className}) => {
    // const {style, content} = data;
    // const className = generatedClass();
    // styleGenerate(className, style)
    const { content } = data;
    return <p className={className} dangerouslySetInnerHTML={{__html: content}} />
};

export default Text;