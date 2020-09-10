<template>
  <section id="listeDeMariage" class="hero is-fullheight-with-navbar">
    <div class="hero-head observedElement">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">Liste de Mariage</h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">Notre liste au père Noël 🎄</h2>
      </div>
    </div>

    <div class="hero-body observedElement">
      <div class="container">
        <div class="explications-overflowing-content">
          <p>Voici une liste de toutes les choses qu'on a envie de s'offrir dans les années qui arrivent. Votre présence est déjà un merveilleux cadeau mais si vous cherchez à nous aider à développer notre foyer vous pouvez trouver des inspirations en dessous 😉</p>
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
                  <img :src="card.image" :alt="card.alternative_description" />
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
    <div class="hero-body observedElement">
      <div class="container">
        <div class="explications">
          <p>
            Si vous voulez participer à l'achat d'un des cadeaux des images du dessus vous pouvez donner un petit quelque chose dans la cagnotte Paypal ou dans l'urne qui sera présente sur place le 5 décembre
            <span>🤗</span>
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
    Paypal
  },
  data() {
    return {
      cards: [
        {
          image: require("@/assets/images/liste_de_mariage/hawaii.jpg"),
          alternative_description: "Hawaii",
          description: "3 semaines d'hotel à Hawaii !!",
          price: "4500€"
        },
        {
          image: require("@/assets/images/liste_de_mariage/batterie-cuisine-professionnelle.jpg"),
          alternative_description: "Batterie de cuisine.",
          description:
            "Batterie de cuisine professionnelle, pour emmener nos gateaux au next level.",
          price: "330€"
        },
        {
          image: require("@/assets/images/liste_de_mariage/vin.jpg"),
          alternative_description: "Bouteilles de vin",
          description: "Quelques bonnes bouteilles de vin.",
          price: "variable"
        },
        {
          image: require("@/assets/images/liste_de_mariage/raclette.jpg"),
          alternative_description: "Appareil à raclette Téfal",
          description:
            "Un appareil à raclette pour se réchauffer la panse lors de dures soirées d'hiver.",
          price: "~50€"
        },
        {
          image: require("@/assets/images/liste_de_mariage/table_basse.jpg"),
          alternative_description: "Table basse",
          description:
            "Une table basse parce que même après 3 ans de vie commune nous n'en avons toujours pas...",
          price: "240€"
        },
        {
          image: require("@/assets/images/liste_de_mariage/resto_etoile.jpg"),
          alternative_description: "Restaurant étoilé",
          description:
            "Un dîner pour 2 au Jules Verne de Frédéric Anton en haut de la tour Eiffel",
          price: "460€"
        },
        {
          image: require("@/assets/images/liste_de_mariage/tapis.jpg"),
          alternative_description: "Tapis",
          description: "Tapis en laisse tressée blanc écru La Redoute.",
          price: "200€"
        },
        {
          image: require("@/assets/images/liste_de_mariage/32.jpg"),
          alternative_description: "xx",
          description: "6",
          price: "€"
        }
      ]
    };
  },
  methods: {
    moveCarousel(direction) {
      this.$refs["ldm-container"].scrollBy({
        left: direction * this.$refs["carousel-ldm-element"][0].clientWidth,
        behavior: "smooth"
      });
    }
  }
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
