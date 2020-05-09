import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './checkout-form.component';

const stripePromise = loadStripe('pk_test_0zcJU99lTj5V4l6qko6KFcuH00bUNZwiRo');
const StripeCheckoutUpgarde = ({ price }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm price={price}/>
    </Elements>
  );
};

export default StripeCheckoutUpgarde;
