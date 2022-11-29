import React from 'react';
import generatedClass from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerator';

const FormBtn = ({data}) => {
    // console.log(data)
    // const className = generatedClass();
    const { id, content, type } = data;
    // const {content, style} = data.form.submitButton
    // styleGenerate(className, style)
    return <button className={`dorik-${type}-${id}`}>{content}</button>;
};

export default FormBtn;