<template>
  <section id="welcome" class="hero is-fullheight-with-navbar has-bg-img">
    <div class="hero-body columns is-multiline">
      <div
        class="column has-text-centered-mobile is-full-mobile is-half-tablet is-colored-pane animate__animated animate__fadeInRight"
      >
        <div class="container">
          <div class="animate__animated animate__fadeInRight">
            <h1
              class="grand-title is-size-1-mobile is-size-0-tablet animate__animated animate__fadeInRight"
            >
              {{ $t("pages.mauritius.welcome.grand_title") }}
            </h1>
            <h2
              class="grand-subtitle is-size-4-mobile is-size-3-tablet animate__animated animate__fadeInRight animate__delay-1s"
            >
              {{ $t("pages.mauritius.welcome.we_gettin") }}
              <strong class="grand-subtitle">
                {{ $t("pages.mauritius.welcome.date") }}</strong
              >
            </h2>

            <h3
              class="grand-subtitle is-size-5-mobile is-size-4-tablet animate__animated animate__fadeInRight animate__delay-2s"
            >
              {{ $t("pages.mauritius.welcome.scroll") }}
            </h3>
          </div>
          <div class="column is-half-tablet is-hidden-mobile"></div>
        </div>
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="rgba(32,51,199, 1)"
        fill-opacity="1"
        d="M0,224L120,240C240,256,480,288,720,282.7C960,277,1200,235,1320,213.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </svg>
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

<style lang="sass" scoped>
.has-bg-img
  background: url('~assets/images/landing-page-bkg/mru/ld-pg-mru.jpg')
  // background: url('~assets/images/landing-page-bkg/mru/ld-pg-mru-2.jpg')
  background-size: cover
  background-position: center left
#welcome
  max-width: 100vw
  overflow: hidden
  .is-colored-pane
    background: rgba(32,51,199, 0.5)
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
    bottom: 60px
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

