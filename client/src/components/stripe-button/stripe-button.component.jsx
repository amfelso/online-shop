import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey = "pk_test_CiNPBIECrv6TZqX4Q2VE0jQN00g26eaYyO";

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(_ => {
      alert('Payment was successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please make sure you use the provided credit card.'
      );
    });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="React Demo Shop"
      billingAddress
      shippingAddress
      img="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
