import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey = "pk_test_CiNPBIECrv6TZqX4Q2VE0jQN00g26eaYyO";

  const onToken = (token) => {
    alert("Payment successful");
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
