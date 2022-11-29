import React from 'react';

const FormBtn = ({data}) => {
    const { id, content, type } = data;
    return <button className={`${type}-${id}`}>{content}</button>;
};

export default FormBtn;