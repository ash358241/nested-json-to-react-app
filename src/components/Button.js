import React from 'react';

const Button = ({data, className}) => {
    return <button className={className}dangerouslySetInnerHTML={{__html: data.content}} />
};

export default Button;