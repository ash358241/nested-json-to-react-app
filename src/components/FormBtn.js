import React from 'react';
import generatedClass from '../utils/idGenerator';

const FormBtn = ({data}) => {
    // const className = generatedClass();
    const { id, content, type } = data;
    // console.log(data.type);
    // const {content, style} = data.form.submitButton
    // styleGenerate(className, style)
    return <button className={`dorik-${type}-${id}`}>{content}</button>;
};

export default FormBtn;