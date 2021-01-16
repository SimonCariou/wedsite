<template>
  <section id="engagementPics" class="hero is-fullheight">
    <div class="hero-head observedElement section-title">
      <!-- <div class="wrap-design stuck-right in-background">
        <img
          src="@/assets/images/global_design/boules_or_tilted.png"
          alt="boules or"
          class="boules-or-info-top-right"
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
                  :src="img.src"
                  :alt="img.alternative_description"
                  class="engageImg"
                />
              </figure>

              <div class="card-content"></div>
            </div>
          </div>
        </div>
        <span class="icon is-large is-hidden-mobile arrow arrow-left">
          <font-awesome-icon
            class="fas fa-2x"
            @click="moveCarousel(-1)"
            :icon="['fas', 'chevron-left']"
          />
        </span>
        <span class="icon is-large is-hidden-mobile arrow arrow-right">
          <font-awesome-icon
            class="fas fa-2x"
            @click="moveCarousel(1)"
            :icon="['fas', 'chevron-right']"
          />
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