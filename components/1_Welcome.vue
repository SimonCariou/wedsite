<template>
  <section id="welcome" class="hero is-fullheight-with-navbar is-primary">
    <div class="hero-body columns is-centered">
      <div
        class="column has-text-centered-tablet has-text-left-mobile is-half-desktop is-full-mobile is-two-fifths-tablet"
      >
        <div id="lottie-container">
          <div class="animate__animated animate__fadeIn animate__delay-3s">
            <lottie-player
              id="firstLottie"
              ref="myRef"
              mode="normal"
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_I9GBQj.json"
              style="height:100%; position: relative;margin:auto"
            ></lottie-player>
          </div>

          <div class="is-overlaying-lottie">
            <h1
              class="title is-size-1-mobile is-size-0-desktop is-size-0-tablet animate__animated animate__fadeInRight"
            >Bienvenue.</h1>
            <h2
              class="subtitle is-size-4-mobile is-size-3-tablet animate__animated animate__fadeInRight animate__delay-1s"
            >On se marie le 5 decembre 2020 !</h2>

            <h3
              class="is-size-5-mobile is-size-4-desktop animate__animated animate__fadeInRight animate__delay-2s"
            >Scrollez pour en savoir plus</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <a href="#informations" class="scroll-next">
        <div class="arrow animate__animated animate__fadeIn animate__delay-3s"></div>
      </a>
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
  top: calc((100vh - 3.25rem) / 2.4)
  padding: 0 1rem

#firstLottie
  bottom: 0
  left: 0
  position: absolute
  right: 0
  top: 0

.arrow,
.arrow:before
  position: absolute
  left: 50%

.arrow
  width: 24px
  height: 24px
  bottom: 40px
  margin: -12px 0 0 -12px
  -webkit-transform: rotate(45deg)
  border-left: none
  border-top: none
  border-right: 2px #fff solid
  border-bottom: 2px #fff solid

.arrow:before
  content: ''
  width: 20px
  height: 20px
  top: 50%
  margin: -10px 0 0 -10px
  border-left: none
  border-top: none
  border-right: 1px #fff solid
  border-bottom: 1px #fff solid
  animation-duration: 2s
  animation-iteration-count: infinite
  animation-name: arrow

@keyframes arrow
  0%
    opacity: 1
  100%
    opacity: 0
    transform: translate(-10px, -10px)
</style>

