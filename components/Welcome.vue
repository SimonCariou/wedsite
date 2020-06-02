<template>
  <section id="welcome" class="hero is-fullheight-with-navbar is-primary is-bold">
    <div class="hero-body columns is-centered" style="align-items: center">
      <div class="column has-text-centered">
        <div id="lottie-container">
          <lottie-player
            id="firstLottie"
            ref="myRef"
            mode="normal"
            autoplay
            src="https://assets4.lottiefiles.com/packages/lf20_I9GBQj.json"
            style="height: 500px;"
          ></lottie-player>
          <div class="is-overlaying-lottie">
            <h1 class="title is-3">BIENVENUE !</h1>
            <h2 class="subtitle is-5">Rox et Sim se marient le 5 decembre 2020</h2>
            <span class="bd-emoji">❤️</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { create } from "@lottiefiles/lottie-interactivity";

export default {
  name: "app",
  mounted() {
    this.$refs.myRef.addEventListener("load", function() {
      create({
        mode: "scroll",
        player: "#firstLottie",
        container: "#lottie-container",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 300]
          }
        ]
      });
    });
  }
};
</script>

<style scoped>
.is-overlaying-lottie {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 45%;
}

.subtitle {
  padding-left: 10px;
  padding-right: 10px;
}
</style>