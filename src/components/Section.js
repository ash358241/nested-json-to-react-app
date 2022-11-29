import React from 'react';
import Row from './Row';

const Section = ({className, children}) => {
    // console.log(children)
    return <section className={className}>{children}</section>
};

export default Section;