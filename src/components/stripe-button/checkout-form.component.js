import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

export const CheckoutForm = ({ price }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod }  = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            alert('Payment Succesful!');
        }
    };

    const CARD_ELEMENT_OPTIONS = {
        base: {
            color: '#32325D',
            fontWeight: 500,
            fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            '::placeholder': {
                color: '#CFD7DF',
            },
            ':-webkit-autofill': {
                color: '#e39f48',
            },
        },
        invalid: {
            color: '#E25950',
            '::placeholder': {
                color: '#FFCCA5',
            },
        },
    };

    return (
        <div className={'payment-info'}>
            <form className={'payment-form'} onSubmit={handleSubmit}>
                <fieldset className={'fieldset-address'}>
                    <legend> Address Details </legend>
                    <FormInput name='name' type='name'
                        handleChange={e => { e.preventDefault(); setName(e.target.value)}}
                        value={name} label='Name' required/>
                    <FormInput name='email' type='email'
                        handleChange={e => { e.preventDefault(); setEmail(e.target.value)}}
                        value={email} label='Email' required/>
                    <FormInput name='phone' type='phone'
                        handleChange={e => { e.preventDefault(); setPhone(e.target.value)}}
                        value={phone} label='Phone' required/>
                    <FormInput name='address' type='address'
                        handleChange={e => { e.preventDefault(); setAddress(e.target.value)}}
                        value={address} label='Address' required/>
                </fieldset>
                <fieldset className={'fieldset-card'}>
                    <legend> Payment Details </legend>
                    <div className={'card-details'}>
                        <CardElement options={CARD_ELEMENT_OPTIONS}/>
                        <CustomButton type="submit" disabled={!stripe}>
                            Pay £{price}
                        </CustomButton>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};