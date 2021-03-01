<template>
  <section
    class="hero is-fullheight-with-navbar is-success"
    style="overflow: hidden"
    id="various"
  >
    <div style="height: 80px; overflow: hidden">
      <svg
        viewBox="0 0 500 80"
        preserveAspectRatio="none"
        style="
          height: 100%;
          width: 100%;
          -webkit-transform: scale(1);
          transform: scale(1);
        "
      >
        <path
          d="M-1.69,26.14 C265.79,93.25 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          fill="#64B8B1"
        ></path>
      </svg>
    </div>
    <div
      class="hero-head has-text-centered observedElement section-title"
      style="padding-top: 0"
    >
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet is-uppercase">
          {{ $t("pages.mauritius.various.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.mauritius.various.subtitle") }}
        </h2>
      </div>
    </div>
    <div class="hero-body observedElement section-body">
      <div class="container">
        <div
          class="columns is-centered is-variable is-8-tablet is-3-mobile is-multiline"
        >
          <div
            class="column is-5-tablet is-12-mobile"
            v-for="box in boxes"
            :key="box.title"
          >
            <div class="box explications">
              {{ box.content }}
            </div>
          </div>
        </div>
        <img
          class="airPlane lazyload"
          :data-src="require('~/assets/images/maurice/plane_anim/plane.png')"
        />

        <img
          class="cloud cloud1 lazyload"
          :data-src="require('~/assets/images/maurice/plane_anim/cloud.png')"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      boxes: [
        {
          title: "Cap Malheureux",
          content: this.$t("pages.mauritius.various.boxes.first"),
        },
        {
          title: "Hiking",
          content: this.$t("pages.mauritius.various.boxes.second"),
        },
      ],
    };
  },
};
</script>

<style scoped lang="sass">
.airPlane
  animation: fly 800ms ease-in-out 0s infinite alternate
  transition: top 1s
  top: 0
  position: relative
  margin: 0 auto
  margin-top: 50px
  z-index: 9999
  display: block
  width: 200px

@keyframes fly
  0%
    top: 0

  100%
    top: 15px

.cloud
  position: absolute
  bottom: 0px
  right: -500px
  opacity: 0.8
  animation: cloud 2s linear 0s infinite reverse
  z-index: 99
  width: 400px

@keyframes cloud
  from
    right: -500px

  to
    right: 102%
</style>