<template>
  <section id="welcome" class="hero is-fullheight-with-navbar is-primary">
    <div class="hero-body columns is-centered">
      <div
        class="column has-text-centered-tablet has-text-left-mobile is-half-desktop is-full-mobile is-two-fifths-tablet"
      >
        <div id="lottie-container">
          <lottie-player
            id="firstLottie"
            ref="myRef"
            mode="normal"
            autoplay
            src="https://assets4.lottiefiles.com/packages/lf20_I9GBQj.json"
            style="height:100%; position: relative;margin:auto"
          ></lottie-player>
          <div class="is-overlaying-lottie">
            <h1 class="title is-size-2-mobile is-size-1-desktop">BIENVENUE !</h1>
            <h2
              class="subtitle is-size-4-mobile is-size-3-desktop"
            >Rox et Sim se marient le 5 decembre 2020</h2>
            <span class="bd-emoji">❤️</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<!--
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
-->
<style lang="sass" scoped>
.is-overlaying-lottie
  bottom: 0
  left: 0
  position: absolute
  right: 0
  top: calc((100vh - 3.25rem) / 2.2)
  padding: 0 1rem

#firstLottie
  bottom: 0
  left: 0
  position: absolute
  right: 0
  top: 0
</style>