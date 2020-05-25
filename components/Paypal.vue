<template>
  <div id="paypal-button-container"></div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          hid: "paypal",
          src:
            "https://www.paypal.com/sdk/js?client-id=Afn4w_JGlKL1olSLlnenvbiUaMvXIR5QDDE8auuBN5ZaNF-1GTrKAptP5-jDiwaQepGdMvY-LDGOOOq0",
          defer: true,
          body: true,
          callback: () => {
            paypalReady(paypal);
          }
        }
      ]
    };
  }
};

function paypalReady(paypal) {
  console.log("paypal loaded applying the CSS");
  paypal
    .Buttons({
      createOrder: function(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "0.01"
              }
            }
          ]
        });
      },
      onApprove: function(data, actions) {
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function(details) {
          // This function shows a transaction success message to your buyer.
          alert("Transaction completed by " + details.payer.name.given_name);
        });
      }
    })
    .render("#paypal-button-container");
  //This function displays Smart Payment Buttons on your web page.
}
</script>