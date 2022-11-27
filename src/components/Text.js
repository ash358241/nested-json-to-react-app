import React from 'react';
import generatedClass from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerator';

const Text = ({data}) => {
    const {style, content} = data;
    const className = generatedClass();
    styleGenerate(className, style)
    return <p className={className} dangerouslySetInnerHTML={{__html: content}} />
};

export default Text;