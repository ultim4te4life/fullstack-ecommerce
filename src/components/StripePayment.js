import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_51O5djUI6XhkggnDxcx7ErcqjsH6hc2vkCs8H8JU8lVgkxVRl33VgOyM05yLp2cKv8qIUHlfmE86wEXumLnr2RGYT00evrVMgbv"
      />
    );
  }
}
