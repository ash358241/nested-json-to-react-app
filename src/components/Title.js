import React from 'react';
import generatedClass from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerator';

const Title = ({data}) => {
    // const className = generatedClass();
    // const {titleType, style, content} = data;
    // const TitleType = titleType;
    // styleGenerate(className, style)
    const { id, type, content } = data;
    const CustomTag = data.titleType;
    return <CustomTag className={`dorik-${type}-${id}`} dangerouslySetInnerHTML={{__html: content}} />
};

export default Title;