<template>
  <section class="hero is-info">
    <!-- <section class="hero is-info"> -->
    <svg
      viewBox="0 0 1440 121"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill="rgba(32,51,199, 1)"
        d="M 0 79 C 365.5 79 365.5 110 731 110 L 731 110 L 731 0 L 0 0 Z"
        stroke-width="0"
      ></path>
      <path
        fill="rgba(32,51,199, 1)"
        d="M 730 110 C 1085 110 1085 43 1440 43 L 1440 43 L 1440 0 L 730 0 Z"
        stroke-width="0"
      ></path>
    </svg>
    <div
      class="hero-head has-text-centered observedElement section-title"
      id="what_to_do"
    >
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          {{ $t("pages.mauritius.what_to_do.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.mauritius.what_to_do.subtitle") }}
        </h2>
        <div class="box explications">
          <p class="block">
            {{ $t("pages.mauritius.what_to_do.introduction") }}
          </p>
        </div>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <div
          class="columns is-mobile is-multiline is-variable is-6-tablet is-3-mobile is-centered is-vcentered"
        >
          <div
            class="column is-4-tablet is-6-mobile observedElement section-body"
            v-for="card in cards"
            :key="card.title"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-3by2">
                  <img
                    :data-src="card.image"
                    :alt="card.alternative_description"
                    class="lazyload"
                    style="
                      background-size: cover;
                      background-position: center center;
                    "
                  />
                </figure>
              </div>
              <div class="card-content is-overlay has-text-centered">
                <p class="is-size-4-tablet is-size-6-mobile">
                  {{ card.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: require("@/assets/images/maurice/places/flic-en-flac.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.flic_en_flac"),
        },
        {
          image: require("@/assets/images/maurice/places/le-morne.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.le_morne"),
        },
        {
          image: require("@/assets/images/maurice/places/rhumerie-chamarel.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.rhumerie_chamarel"),
        },
        {
          image: require("@/assets/images/maurice/places/pamplemousses.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.pamplemousses"),
        },
        {
          image: require("@/assets/images/maurice/places/chamarel-7-colors.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards._7_couleurs"),
        },
        {
          image: require("@/assets/images/maurice/places/port-louis.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.port_louis"),
        },
      ],
    };
  },
};
</script>

<style scoped lang="sass">
p
  hyphens: manual
  -webkit-hyphens: auto
  -moz-hyphens: auto
  -ms-hyphens: auto
  word-break: break-word

.card-content
  p
    font-family: "Libre Baskerville", "Bodoni Moda"
    color: white
    font-weight: 700
    text-shadow: 2px 2px 4px black
</style>