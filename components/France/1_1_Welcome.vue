<template>
  <section id="welcome" class="hero is-fullheight-with-navbar has-bg-img">
    <div class="hero-body columns is-multiline">
      <div class="column is-half-tablet is-hidden-mobile"></div>
      <div
        class="column has-text-centered-mobile is-full-mobile is-half-tablet is-colored-pane animate__animated animate__fadeInRight"
      >
        <div class="container">
          <div class="animate__animated animate__fadeInRight">
            <h1
              class="grand-title is-size-1-mobile is-size-0-tablet animate__animated animate__fadeInRight"
            >
              {{ $t("pages.france.welcome.grand_title") }}
            </h1>
            <h2
              class="grand-subtitle is-size-4-mobile is-size-3-tablet animate__animated animate__fadeInRight animate__delay-1s"
            >
              {{ $t("pages.france.welcome.we_gettin") }}
              <strong class="grand-subtitle">
                {{ $t("pages.france.welcome.date") }}</strong
              >
            </h2>

            <h3
              class="grand-subtitle is-size-5-mobile is-size-4-tablet animate__animated animate__fadeInRight animate__delay-2s"
            >
              {{ $t("pages.france.welcome.scroll") }}
            </h3>
          </div>
        </div>

        <!-- <div id="lottie-container">
          <div class="animate__animated animate__fadeIn animate__delay-3s">
            <lottie-player
              id="firstLottie"
              ref="myRef"
              mode="normal"
              autoplay
              loop
              src="https://assets1.lottiefiles.com/private_files/lf30_qblxo1zt.json"
              style="width: 80%; height: auto; position: relative; margin: auto"
            ></lottie-player>
          </div>
          <div class="is-overlaying-lottie"></div>
        </div> -->
      </div>
      <div class="column is-half-tablet is-flex-mobile is-hidden-tablet"></div>
    </div>
    <div class="hero-foot is-hidden-touch">
      <span class="scroll-next" @click="scrollTo()">
        <div
          id="arrow-scroll-welcome"
          class="animate__animated animate__fadeIn animate__delay-3s"
        ></div>
      </span>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {},
  methods: {
    scrollTo() {
      window.scrollTo({ top: window.innerHeight - 52, behavior: "smooth" });
    },
  },
};
</script>
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
.has-bg-img
  // background: url('~assets/images/landing-page-bkg/roxetsim-engagement-lucie-web.jpg')
  background: url('~assets/images/landing-page-bkg/fr/roxetsim-engagement-lucie-alone-web.jpg')
  background-size: cover
  background-position: center left
#welcome
  max-width: 100vw
  overflow: hidden
  .is-colored-pane
    background: rgba(245, 98, 0, 0.5)
    margin-top: 1.5rem
    height: 100%
    background-size: cover
    background-position: center center

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

  #arrow-scroll-welcome,
  #arrow-scroll-welcome:before
    position: absolute
    left: 50%
    cursor: pointer

  #arrow-scroll-welcome
    width: 24px
    height: 24px
    bottom: 40px
    margin: -12px 0 0 -12px
    -webkit-transform: rotate(45deg)
    border-left: none
    border-top: none
    border-right: 2px #fff solid
    border-bottom: 2px #fff solid

  #arrow-scroll-welcome:before
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

