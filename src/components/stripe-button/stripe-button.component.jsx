import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_0zcJU99lTj5V4l6qko6KFcuH00bUNZwiRo';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='KT Webshop Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is £${price}`}
      amount={priceForStripe}
      currency="GBP"
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
