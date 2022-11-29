import React from 'react';

const Text = ({data, className}) => {
    const { content } = data;
    return <p className={className} dangerouslySetInnerHTML={{__html: content}} />
};

export default Text;