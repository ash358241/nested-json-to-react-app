import React from 'react';
import Column from './Column';

const Row = ({data}) => {
    const {content, style} = data
    return (
        <div style={style}>
            {
                content.map(data => <Column data={data} key={data.id} />)
            }
        </div>
    );
};

export default Row;