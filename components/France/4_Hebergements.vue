<template>
  <section id="hebergements" class="hero is-fullheight is-light">
    <div class="hero-head observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">{{ $t("pages.france.accommodations.title") }}</h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">{{ $t("pages.france.accommodations.subtitle") }}</h2>
      </div>
    </div>

    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="explications-overflowing-content">
          <p>{{ $t("pages.france.accommodations.description.one") }}
           </p>
          <p>
            {{ $t("pages.france.accommodations.description.two") }}
            <em>
              <a href="#contact">{{ $t("pages.france.accommodations.description.three") }}</a>
            </em>{{ $t("pages.france.accommodations.description.four") }}
          </p>
          <p>{{ $t("pages.france.accommodations.description.five") }}</p>
        </div>

        <div class="columns is-mobile scroll-ctn" ref="hebergements-container">
          <div v-for="card in cards" :key="card.name" class="column is-10-mobile is-3-tablet">
            <div class="card" ref="carousel-hebergements-element">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="card.image" :alt="card.alt" />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h3 class="is-size-5">
                    <span class="highlight">{{ card.name }}</span>
                  </h3>
                  <p style="margin-bottom:0"><em>{{ card.type }}</em></p>
                  <div style="margin-bottom:1rem">
                      <span style="padding-right:5px"> {{card.ratings}}</span>
                      <img :src="card.nb_stars" class="rates"></span>
                  </div>
                  
                  <p style="margin-bottom:0">{{ card.address }}</p>
                  <p>{{ card.city }}</p>
                  <p style="margin-bottom:0">{{ card.description }}</p>
                  <p>
                    <em>{{ card.distance }}</em>
                  </p>
                  <footer class="card-footer">
                    <button class="button is-primary">
                      <a
                        :href= "card.resa_link"
                        target="_blank"
                        rel="noopener"
                      >{{ $t("pages.france.accommodations.cards.book") }}</a>
                    </button>
                  </footer>
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
          image: require("@/assets/images/hebergements/hotel_eclipse.jpg"),
          alt: "Hotel Eclipse",
          name: this.$t("pages.france.accommodations.cards.eclipse.title"),
          type: this.$t("pages.france.accommodations.cards.eclipse.type"),
          nb_stars: require("@/assets/images/hebergements/ratings/three_stars.png"),
          ratings: this.$t("pages.france.accommodations.cards.eclipse.ratings"),
          address: this.$t("pages.france.accommodations.cards.eclipse.street"),
          city: this.$t("pages.france.accommodations.cards.eclipse.city"),
          description: this.$t(
            "pages.france.accommodations.cards.eclipse.price"
          ),
          distance: this.$t(
            "pages.france.accommodations.cards.eclipse.distance"
          ),
          resa_link: "http://www.hoteleclipse.fr/",
        },
        {
          image: require("@/assets/images/hebergements/ibis.jpg"),
          alt: "Ibis Budget",
          name: "Ibis Budget",
          type: "Hôtel",
          nb_stars: require("@/assets/images/hebergements/ratings/three_stars.png"),
          ratings: "3.0",
          address: "19 Boulevard De Sully,",
          city: "78200, Mantes-la-Jolie",
          description: "A partir de 60€/chambre double.",
          distance: "Situé à 4.5km du Village de Sully",
          resa_link:
            "https://all.accor.com/ssr/app/accor/rates/7404/index.en.shtml?dateIn=2020-12-05&nights=1&compositions=2&stayplus=false",
        },
        {
          image: require("@/assets/images/hebergements/ferme_des_vallees.jpg"),
          alt: "Ferme des Vallées",
          name: "Ferme des Vallées",
          type: "Gîte/Maison d'Hôtes",
          nb_stars: require("@/assets/images/hebergements/ratings/five_stars.png"),
          ratings: "5.0",
          address: "20 Bis Rue Henri Duverdin",
          city: "78200, Soindres",
          description: "A partir de 70€/chambre double.",
          distance: "Situé à 6.1km du Village de Sully",
          resa_link: "https://www.fermedesvallees.com",
        },
        {
          image: require("@/assets/images/hebergements/la_ruche.jpg"),
          alt: "La Ruche",
          name: "La Ruche",
          type: "Hôtel",
          nb_stars: require("@/assets/images/hebergements/ratings/four_stars.png"),
          ratings: "4.0",
          address: "2 route Nationale,",
          city: "78270, Rolleboise",
          description: "A partir de 115€/chambre double.",
          distance: "Situé à 6.6km du Village de Sully",
          resa_link:
            "https://www.booking.com/hotel/fr/la-ruche-rolleboise.fr.html?aid=356980;label=gog235jc-1DCAsoTUITbGEtcnVjaGUtcm9sbGVib2lzZUgNWANoTYgBAZgBDbgBGcgBDNgBA-gBAfgBAogCAagCA7gCo_WC-wXAAgHSAiRjNjE3NTBlZS0xNjQ2LTQzZGUtOWRjYS1kNzBjMjcyNTJiOTTYAgTgAgE;sid=ad09d11d782574cc17f899e00abcc967;all_sr_blocks=91080903_200308857_0_2_0;checkin=2020-12-05;checkout=2020-12-06;dest_id=-1462401;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=91080903_200308857_0_2_0;hp_group_set=0;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=91080903_200308857_0_2_0__11260;srepoch=1600178457;srpvid=9683628c469a01c4;type=total;ucfs=1&",
        },
        {
          image: require("@/assets/images/liste_de_mariage/etc.jpg"),
          alt: "Autres",
          name: "Autres",
          type: "Différents types de logements: Hôtel/Maison d'Hôtes",
          description: "Couchages à proximité du lieu de réception:",
          distance: "",
          resa_link:
            "https://www.google.fr/maps/search/H%C3%B4tels/@48.9799854,1.6196516,13z/data=!3m1!4b1!4m11!2m10!3m6!1zSMO0dGVscw!2sLE+VILLAGE+DE+SULLY,+D110,+78710+Rosny-sur-Seine!3s0x47e6b9b378c1c355:0x56036d031fc3031e!4m2!1d1.6546709!2d48.9799907!5m2!5m1!1s2020-12-05",
        },
      ],
    };
  },
  methods: {
    moveCarousel(direction) {
      this.$refs["hebergements-container"].scrollBy({
        left:
          direction *
          this.$refs["carousel-hebergements-element"][0].clientWidth,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="sass">
.button
  a
    color: #fff

.card
  display: flex
  flex-direction: column
  height: 100%

.columns
  overflow-x: scroll
  -webkit-overflow-scrolling: touch
  scroll-snap-type: x mandatory
  max-width: 100vw
  width: 100%
  .column
    scroll-snap-align: center

  span.rates
    background-size: 14px 13px
    height: 13px
    top: 1px
    width: 70px
</style>