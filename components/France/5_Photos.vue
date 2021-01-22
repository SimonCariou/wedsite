<template>
  <section id="photos" class="hero is-fullheight">
    <div class="hero-head observedElement section-title">
      <div class="wrap-design stuck-right in-background">
        <img
          :data-src="
            require('~/assets/images/global_design/boules_or_tilted.png')
          "
          alt="boules or"
          class="boules-or-info-top-right lazyload"
        />
      </div>
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          {{ $t("pages.france.photos.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.france.photos.subtitle") }}
        </h2>
      </div>
    </div>

    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="explications-overflowing-content">
          <p>
            {{ $t("pages.france.photos.description") }}
          </p>
        </div>
        <div class="columns is-mobile scroll-ctn" ref="photos-container">
          <div
            v-for="card in cards"
            :key="card.date"
            class="column is-10-mobile is-5-tablet"
          >
            <div class="card" ref="carousel-photos-element">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    :data-src="card.image"
                    :alt="card.alternative_description"
                    class="lazyload"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <div>
                    <h3 class="is-size-5">
                      <span class="highlight">{{ card.date }}</span>
                    </h3>
                    <p>{{ card.description }}</p>
                  </div>
                </div>
              </div>
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
      cards: [
        {
          image: require("@/assets/images/scrollsnap_photos/2013.jpg"),
          alternative_description: "CDMGE",
          date: this.$t("pages.france.photos.cards._2013.date"),
          description: this.$t("pages.france.photos.cards._2013.description"),
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2014.jpg"),
          alternative_description: "Match de football americain au Texas",
          date: this.$t("pages.france.photos.cards._2014.date"),
          description: this.$t("pages.france.photos.cards._2014.description"),
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2015.jpg"),
          alternative_description: "Soirée EPF",
          date: this.$t("pages.france.photos.cards._2015.date"),
          description: this.$t("pages.france.photos.cards._2015.description"),
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2016.jpg"),
          alternative_description: "Tour Eiffel",
          date: this.$t("pages.france.photos.cards._2016.date"),
          description: this.$t("pages.france.photos.cards._2016.description"),
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2017.jpg"),
          alternative_description: "Mariage Pierre-Yves et Elodie",
          date: this.$t("pages.france.photos.cards._2017.date"),
          description: this.$t("pages.france.photos.cards._2017.description"),
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2018.jpg"),
          alternative_description: "Opera Garnier",
          date: this.$t("pages.france.photos.cards._2018.date"),
          description: this.$t("pages.france.photos.cards._2018.description"),
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2019.jpg"),
          alternative_description: "Paris - Hôtel de Ville",
          date: this.$t("pages.france.photos.cards._2019.date"),
          description: this.$t("pages.france.photos.cards._2019.description"),
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2020.jpg"),
          alternative_description: "Saint Valentin 2020",
          date: this.$t("pages.france.photos.cards._2020.date"),
          description: this.$t("pages.france.photos.cards._2020.description"),
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2020.jpg"),
          alternative_description: "Saint Valentin 2020",
          date: this.$t("pages.france.photos.cards._2021.date"),
          description: this.$t("pages.france.photos.cards._2021.description"),
        },
      ],
    };
  },
  methods: {
    moveCarousel(direction) {
      this.$refs["photos-container"].scrollBy({
        left: direction * this.$refs["carousel-photos-element"][0].clientWidth,
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
.card
  display: flex
  flex-direction: column
  height: 100%
</style>