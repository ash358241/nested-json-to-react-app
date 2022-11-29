import React from 'react';
import Column from './Column';

const Row = ({className, children}) => {
    // const {content, style} = data

    return <div className={className}>{children}</div>
};

export default Row;