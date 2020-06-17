<template>
  <section id="listeDeMariage" class="hero is-fullheight-with-navbar">
    <div class="hero-head observedElement">
      <h1 class="title is-size-3-mobile is-size-1-tablet">Liste de Mariage</h1>
      <h2 class="subtitle is-size-5-mobile is-size-4-tablet">Explications</h2>
    </div>
    <div class="hero-body observedElement observedCarousel">
      <div class="container">
        <div class="columns is-mobile">
          <div
            v-for="card in cards"
            :key="card.description"
            class="column is-11-mobile is-5-tablet"
          >
            <div class="card observedElement">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <Paypal />
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
          description: "Voyage de noce a Hawaii !!"
        },
        {
          image: require("@/assets/images/liste_de_mariage/batterie-cuisine-professionnelle.jpg"),
          alternative_description: "Batterie de cuisine.",
          description:
            "Batterie de cuisine professionnelle, pour emmener nos gateaux au next level."
        },
        {
          image: "https://bulma.io/images/placeholders/1280x960.png",
          alternative_description: "xx",
          description: "1"
        },
        {
          image: "https://bulma.io/images/placeholders/1280x960.png",
          alternative_description: "xx",
          description: "2"
        },
        {
          image: "https://bulma.io/images/placeholders/1280x960.png",
          alternative_description: "xx",
          description: "3"
        },
        {
          image: "https://bulma.io/images/placeholders/1280x960.png",
          alternative_description: "xx",
          description: "4"
        },
        {
          image: "https://bulma.io/images/placeholders/1280x960.png",
          alternative_description: "xx",
          description: "5"
        },
        {
          image: "https://bulma.io/images/placeholders/1280x960.png",
          alternative_description: "xx",
          description: "6"
        }
      ]
    };
  }
};
</script>

<style scoped lang="sass">
.columns
  overflow-x: scroll
  -webkit-overflow-scrolling: touch
  scroll-snap-type: x mandatory
  width: 100%
  max-width: 100vw

  .column
    scroll-snap-align: center
.card
  display: flex
  flex-direction: column
  height: 100%
</style>
