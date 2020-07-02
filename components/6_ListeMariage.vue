<template>
  <section id="listeDeMariage" class="hero is-fullheight-with-navbar">
    <!-- SEPARATOR -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#f5f5f5"
        fill-opacity="1"
        d="M0,256L80,218.7C160,181,320,107,480,80C640,53,800,75,960,117.3C1120,160,1280,224,1360,256L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      />
    </svg>
    <div class="hero-head observedElement">
      <h1 class="title is-size-2-mobile is-size-1-tablet">Liste de Mariage</h1>
      <h2 class="subtitle is-size-5-mobile is-size-4-tablet">Explications</h2>
    </div>

    <div class="hero-body observedElement">
      <div class="container">
        <div class="explications">
          <p>Voici une liste de toutes les choses qu'on a envie de s'offrir dans les années qui arrivent!</p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="level is-mobile is-overlay is-hidden-mobile">
          <div class="level-left">
            <div class="level-item">
              <span class="icon is-large">
                <font-awesome-icon
                  class="fas fa-3x arrow"
                  @click="moveCarousel(-1)"
                  :icon="['fas', 'chevron-left']"
                />
              </span>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <span class="icon is-large">
                <font-awesome-icon
                  class="fas fa-3x arrow"
                  @click="moveCarousel(1)"
                  :icon="['fas', 'chevron-right']"
                />
              </span>
            </div>
          </div>
        </nav>
        <div class="explications">
          <p>
            Si vous voulez participer à l'achat d'un des cadeaux des images du dessus vous pouvez donner un petit quelque chose dans la cagnotte Paypal ou dans l'urne qui sera présente sur place le 5 décembre
            <span>🤗</span>
          </p>
        </div>
      </div>
    </div>
    <div class="container observedElement">
      <Paypal />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#f5f5f5"
        fill-opacity="1"
        d="M0,32L48,53.3C96,75,192,117,288,160C384,203,480,245,576,240C672,235,768,181,864,138.7C960,96,1056,64,1152,64C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
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
          image: require("@/assets/images/liste_de_mariage/32.jpg"),
          alternative_description: "xx",
          description: "1"
        },
        {
          image: require("@/assets/images/liste_de_mariage/32.jpg"),
          alternative_description: "xx",
          description: "2"
        },
        {
          image: require("@/assets/images/liste_de_mariage/32.jpg"),
          alternative_description: "xx",
          description: "3"
        },
        {
          image: require("@/assets/images/liste_de_mariage/32.jpg"),
          alternative_description: "xx",
          description: "4"
        },
        {
          image: require("@/assets/images/liste_de_mariage/32.jpg"),
          alternative_description: "xx",
          description: "5"
        },
        {
          image: require("@/assets/images/liste_de_mariage/32.jpg"),
          alternative_description: "xx",
          description: "6"
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
  width: 100%
  max-width: 100vw

  .column
    scroll-snap-align: center
.card
  display: flex
  flex-direction: column
  height: 100%
</style>
