import React from 'react';
import strToCapitalizeCase from '../utils/strToCapitalize';
import components from './component';

const ComponentTree = ({ tree }) => {
    return (
        <>
            {
                tree.map(element => {
                    const {id, content, type, name} = element
                    const Component = components[strToCapitalizeCase(name)]
                    return (
                        <div key={id}>
                            {
                                Array.isArray(content) ?
                                    (
                                        <Component key={id} className={`${type}-${id}`}>
                                            <ComponentTree key={id} tree={content} />
                                        </Component>
                                    )
                                    :
                                    (
                                        <Component className={`${type}-${id}`} key={id} data={element} />

                                    )
                            }
                        </div>
                    )
                })
            }
        </>
    );
};

export default ComponentTree;