import React from 'react';

const Image = ({data, className}) => {
    const { attr } = data;
    return <img className={className} {...attr} alt={attr.alt} />;
};

export default Image;