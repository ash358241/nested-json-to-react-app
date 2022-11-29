import React from 'react';
import strToCapitalizeCase from '../utils/strToCapitalize';
import components from './component';

const ComponentTree = ({ tree }) => {
    return (
        <>
            {
                tree.map(element => {
                    {/* console.log(element.content) */}
                    const Component = components[strToCapitalizeCase(element.name)]
                    return (
                        <div key={element.id}>
                            {
                                Array.isArray(element.content) ?
                                    (
                                        <Component key={element.id} className={`dorik-${element.type}-${element.id}`}>
                                            <ComponentTree key={element.id} tree={element.content} />
                                        </Component>
                                    )
                                    :
                                    (
                                        <Component className={`dorik-${element.type}-${element.id}`} key={element.key} data={element} />

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