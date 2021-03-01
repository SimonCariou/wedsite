<template>
  <section id="engagementPics" class="hero is-fullheight is-light">
    <div class="hero-head observedElement section-title">
      <!-- <div class="wrap-design stuck-right in-background">
        <img
          :data-src="
              require('~/assets/images/global_design/boules_or_tilted.png')
            "
          alt="boules or"
          class="boules-or-info-top-right lazyload"
        />
      </div> -->
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          {{ $t("pages.france.engagementPics.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.france.engagementPics.subtitle") }}
        </h2>
      </div>
    </div>

    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="explications-overflowing-content">
          <p>
            {{ $t("pages.france.engagementPics.description") }}
          </p>
          <p>
            {{ $t("pages.france.engagementPics.link") }}
            <a href="https://picti.net/t6it1" target="_blank">{{
              $t("pages.france.engagementPics.gallery")
            }}</a>
          </p>
        </div>
        <div
          class="columns is-mobile scroll-ctn"
          ref="engagementPics-container"
        >
          <div
            v-for="img in ctn"
            :key="img.src"
            class="column is-10-mobile is-5-tablet"
          >
            <div class="img_sc" ref="carousel-engagementPics-element">
              <figure class="image is-4by3">
                <img
                  :data-src="img.src"
                  :alt="img.alternative_description"
                  class="engageImg lazyload"
                />
              </figure>

              <div class="card-content"></div>
            </div>
          </div>
        </div>
        <span class="icon is-large is-hidden-mobile arrow arrow-left">
          <figure class="image is-32x32" @click="moveCarousel(-1)">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="rgba(255,255,255,0.9)"
            >
              <path
                d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"
              />
            </svg></figure
        ></span>

        <span class="icon is-large is-hidden-mobile arrow arrow-right">
          <figure class="image is-32x32" @click="moveCarousel(1)">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="rgba(255,255,255,0.9)"
            >
              <path
                d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"
              />
            </svg>
          </figure>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ctn: [
        {
          src: require("@/assets/images/engagementPics/1.jpg"),
          alternative_description: "1",
        },
        {
          src: require("@/assets/images/engagementPics/2.jpg"),
          alternative_description: "2",
        },
        {
          src: require("@/assets/images/engagementPics/3.jpg"),
          alternative_description: "3",
        },
        {
          src: require("@/assets/images/engagementPics/4.jpg"),
          alternative_description: "4",
        },
        {
          src: require("@/assets/images/engagementPics/5.jpg"),
          alternative_description: "5",
        },
        {
          src: require("@/assets/images/engagementPics/6.jpg"),
          alternative_description: "6",
        },
        {
          src: require("@/assets/images/engagementPics/7.jpg"),
          alternative_description: "7",
        },
        {
          src: require("@/assets/images/engagementPics/8.jpg"),
          alternative_description: "8",
        },
        {
          src: require("@/assets/images/engagementPics/9.jpg"),
          alternative_description: "9",
        },
        {
          src: require("@/assets/images/engagementPics/10.jpg"),
          alternative_description: "10",
        },
        {
          src: require("@/assets/images/engagementPics/11.jpg"),
          alternative_description: "11",
        },
      ],
    };
  },
  methods: {
    moveCarousel(direction) {
      this.$refs["engagementPics-container"].scrollBy({
        left:
          direction *
          this.$refs["carousel-engagementPics-element"][0].clientWidth,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="sass">
.columns
  overflow-x: scroll
  -webkit-overflow-scrolling: touch
  scroll-snap-type: x mandatory
  max-width: 100vw
  width: 100%

  .column
    scroll-snap-align: center
.img_sc
  display: flex
  flex-direction: column
  height: 100%
figure, img
  border-radius: 15px
.engageImg
  object-fit: cover
//override .arrow css styles defined in carousel.sass because no card content here.
.arrow
  top: 50%
</style>