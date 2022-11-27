import React from 'react';
import strToCapitalizeCase from '../utils/strToCapitalize';
import component from './component';

const Column = ({data}) => {
    const {content, style} = data
    return (
        <div style={style}>
            {
                content.map(element => {
                    const {id, name} = element
                    const Component = component[strToCapitalizeCase(name)]
                    return <Component key={id} data={element}/>
                })
            }
        </div>
    );
};

export default Column;