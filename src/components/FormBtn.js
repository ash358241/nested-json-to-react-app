import React from 'react';
import generatedClass from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerator';

const FormBtn = ({data}) => {
    const className = generatedClass();
    const {content, style} = data.form.submitButton
    styleGenerate(className, style)
    return <button className={className}>{content}</button>
};

export default FormBtn;