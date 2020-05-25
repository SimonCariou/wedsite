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
            console.log("paypal loaded applying the CSS");
            paypal.Buttons().render("#paypal-button-container");
          }
        }
      ]
    };
  }
};
</script>