import React from 'react';
import strToCapitalizeCase from '../utils/strToCapitalize';
import component from './component';

const Column = ({className, children}) => {
    // const {content, style} = data
    return <div className={className}>{children}</div>
};

export default Column;