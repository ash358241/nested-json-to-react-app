import React from 'react';
import FormBtn from './FormBtn';
import InputField from './InputField';

const SubscriptionForm = ({data, className}) => {
    return ( 
        <form className={className}>
            {data.form.fields.items.map((item) => {
                return <InputField data={item} key={item.id} />;
            })}
            <FormBtn data={data.form.submitButton} />
        </form>
    );
};

export default SubscriptionForm;