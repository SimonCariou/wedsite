<template>
  <section id="listeDeMariage" class="hero is-fullheight is-light">
    <div class="hero-head observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          {{ $t("pages.france.registry.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.france.registry.subtitle") }}
        </h2>
      </div>
    </div>

    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="explications-overflowing-content">
          <p>
            {{ $t("pages.france.registry.description_top") }}
          </p>
        </div>
        <div class="columns is-mobile scroll-ctn" ref="ldm-container">
          <div
            v-for="card in cards"
            :key="card.description"
            class="column is-10-mobile is-5-tablet"
          >
            <div class="card" ref="carousel-ldm-element">
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
                    <p>{{ card.description }}</p>
                  </div>
                  <div class="price">
                    <p>Prix: {{ card.price }}</p>
                  </div>
                </div>
              </div>
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
    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="explications">
          <p>
            {{ $t("pages.france.registry.description_bottom") }}
          </p>
        </div>
        <Paypal />
      </div>
    </div>
  </section>
</template>

<script>
import Paypal from "~/components/Paypal.vue";
export default {
  components: {
    Paypal,
  },
  data() {
    return {
      cards: [
        {
          image: require("@/assets/images/liste_de_mariage/hawaii.jpg"),
          alternative_description: "Hawaii",
          description: this.$t(
            "pages.france.registry.cards.hawaii.description"
          ),
          price: this.$t("pages.france.registry.cards.hawaii.price"),
        },
        {
          image: require("@/assets/images/liste_de_mariage/batterie-cuisine-professionnelle.jpg"),
          alternative_description: "Batterie de cuisine.",
          description: this.$t(
            "pages.france.registry.cards.cuisine.description"
          ),
          price: this.$t("pages.france.registry.cards.cuisine.price"),
        },
        {
          image: require("@/assets/images/liste_de_mariage/vin.jpg"),
          alternative_description: "Bouteilles de vin",
          description: this.$t("pages.france.registry.cards.vin.description"),
          price: this.$t("pages.france.registry.cards.vin.price"),
        },
        {
          image: require("@/assets/images/liste_de_mariage/raclette.jpg"),
          alternative_description: "Appareil à raclette Téfal",
          description: this.$t(
            "pages.france.registry.cards.raclette.description"
          ),
          price: this.$t("pages.france.registry.cards.raclette.price"),
        },
        // {
        //   image: require("@/assets/images/liste_de_mariage/table_basse.jpg"),
        //   alternative_description: "Table basse",
        //   description:
        //     "Une table basse parce que même après 3 ans de vie commune nous n'en avons toujours pas...",
        //   price: "240€",
        // }
        /*
        {
          image: require("@/assets/images/liste_de_mariage/resto_etoile.jpg"),
          alternative_description: "Restaurant étoilé",
          description:
            "Un dîner pour 2 au Jules Verne de Frédéric Anton en haut de la tour Eiffel",
          price: "230€ x 2",
        },*/ {
          image: require("@/assets/images/liste_de_mariage/tapis.jpg"),
          alternative_description: "Tapis",
          description: this.$t("pages.france.registry.cards.tapis.description"),
          price: this.$t("pages.france.registry.cards.tapis.price"),
        } /*
        {
          image: require("@/assets/images/liste_de_mariage/bilig.jpg"),
          alternative_description: "Bilig Krampouz",
          description:
            "Pour faire des belles galettes bretonnes, pas de choix il faut une Bilig.",
          price: "250€",
        },*/,
        {
          image: require("@/assets/images/liste_de_mariage/fou_de_patisserie.jpg"),
          alternative_description: "Abonnement fou de patisserie",
          description: this.$t("pages.france.registry.cards.fdp.description"),
          price: this.$t("pages.france.registry.cards.fdp.price"),
        },
        {
          image: require("@/assets/images/liste_de_mariage/hue.jpg"),
          alternative_description: "Lampes connectées Philips Hue",
          description: this.$t(
            "pages.france.registry.cards.lampes.description"
          ),
          price: this.$t("pages.france.registry.cards.lampes.price"),
        },
        {
          image: require("@/assets/images/liste_de_mariage/ustensiles_patisserie.jpg"),
          alternative_description: "ustensiles de patisserie",
          description: this.$t(
            "pages.france.registry.cards.ustensiles.description"
          ),
          price: this.$t("pages.france.registry.cards.ustensiles.price"),
        },
        {
          image: require("@/assets/images/liste_de_mariage/impression_photos_cadres.jpg"),
          alternative_description: "impression photos cadres",
          description: this.$t(
            "pages.france.registry.cards.impressions.description"
          ),
          price: this.$t("pages.france.registry.cards.impressions.price"),
        },

        {
          image: require("@/assets/images/liste_de_mariage/tea_time_meurice.jpg"),
          alternative_description: "tea time meurice",
          description: this.$t(
            "pages.france.registry.cards.tea_time.description"
          ),
          price: this.$t("pages.france.registry.cards.tea_time.price"),
        },
        {
          image: require("@/assets/images/liste_de_mariage/lave_vaisselle.jpg"),
          alternative_description: "Lave vaisselle",
          description: this.$t(
            "pages.france.registry.cards.lave_vaisselle.description"
          ),
          price: this.$t("pages.france.registry.cards.lave_vaisselle.price"),
        },
        {
          image: require("@/assets/images/liste_de_mariage/etc.jpg"),
          alternative_description: "...",
          description: this.$t(
            "pages.france.registry.cards.autres.description"
          ),
          price: this.$t("pages.france.registry.cards.autres.price"),
        },
      ],
    };
  },
  methods: {
    moveCarousel(direction) {
      this.$refs["ldm-container"].scrollBy({
        left: direction * this.$refs["carousel-ldm-element"][0].clientWidth,
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

.price
  padding-top: 1rem
  font-style: italic
  color: rgba(141, 4, 4, 0.6)
</style>
