import React from 'react';

const Title = ({data, className}) => {
    const { content } = data;
    const TitleTag = data.titleType;
    return <TitleTag className={className} dangerouslySetInnerHTML={{__html: content}} />
};

export default Title;