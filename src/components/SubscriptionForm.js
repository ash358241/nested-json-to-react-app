import React from 'react';
import generatedClass from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerator';
import FormBtn from './FormBtn';
import InputField from './InputField';

const SubscriptionForm = ({data}) => {
    const className = generatedClass()
    const {items, style} = data.form.fields
    styleGenerate(className, data.form.style)
    return ( 
        <div>
            <form className={className}>
                {
                    items.map(data => <InputField key={data.id} data={data} style={style} />)
                }
                <FormBtn data={data}/>
            </form>
        </div>
    );
};

export default SubscriptionForm;