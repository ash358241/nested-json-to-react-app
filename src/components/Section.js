import React from 'react';
import Row from './Row';

const Section = ({data}) => {
    const {content, style} = data
    return (
        <div style={style}>
        {
            content.map(contentData => <Row data={contentData} key={contentData.id} />)
        }
        </div>
    );
};

export default Section;