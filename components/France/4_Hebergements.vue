<template>
  <section id="hebergements" class="hero is-fullheight is-light">
    <div class="hero-head observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          {{ $t("pages.france.accommodations.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.france.accommodations.subtitle") }}
        </h2>
      </div>
    </div>

    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="explications-overflowing-content">
          <p>{{ $t("pages.france.accommodations.description.one") }}</p>
          <p>
            {{ $t("pages.france.accommodations.description.two") }}

            <a href="#contact" class="is-link-in-section">{{
              $t("pages.france.accommodations.description.three")
            }}</a
            >{{ $t("pages.france.accommodations.description.four") }}
          </p>
          <p>{{ $t("pages.france.accommodations.description.five") }}</p>
        </div>

        <div class="columns is-mobile scroll-ctn" ref="hebergements-container">
          <div
            v-for="card in cards"
            :key="card.name"
            class="column is-10-mobile is-3-tablet"
          >
            <div class="card" ref="carousel-hebergements-element">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    :data-src="card.image"
                    :alt="card.alt"
                    class="lazyload"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h3 class="is-size-5">
                    <span class="highlight">{{ card.name }}</span>
                  </h3>
                  <p style="margin-bottom: 0">
                    <em>{{ card.type }}</em>
                  </p>
                  <div style="margin-bottom: 1rem">
                    <span style="padding-right: 5px"> {{ card.ratings }}</span>
                    <img :src="card.nb_stars" class="rates" />
                  </div>

                  <p style="margin-bottom: 0">{{ card.address }}</p>
                  <p>{{ card.city }}</p>
                  <p style="margin-bottom: 0">{{ card.description }}</p>
                  <p>
                    <em>{{ card.distance }}</em>
                  </p>
                  <footer class="card-footer">
                    <button class="button is-primary">
                      <a
                        :href="card.resa_link"
                        target="_blank"
                        rel="noopener"
                        >{{ $t("pages.france.accommodations.cards.book") }}</a
                      >
                    </button>
                  </footer>
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
          alt: "Ibis budget",
          name: this.$t("pages.france.accommodations.cards.ibis.title"),
          type: this.$t("pages.france.accommodations.cards.ibis.type"),
          nb_stars: require("@/assets/images/hebergements/ratings/three_stars.png"),
          ratings: this.$t("pages.france.accommodations.cards.ibis.ratings"),
          address: this.$t("pages.france.accommodations.cards.ibis.street"),
          city: this.$t("pages.france.accommodations.cards.ibis.city"),
          description: this.$t("pages.france.accommodations.cards.ibis.price"),
          distance: this.$t("pages.france.accommodations.cards.ibis.distance"),
          resa_link:
            "https://all.accor.com/ssr/app/accor/rates/7404/index.en.shtml?dateIn=2021-10-16&nights=1&compositions=2&stayplus=false&destination=Mantes%20la%20jolie,%20France",
        },
        {
          image: require("@/assets/images/hebergements/ferme_des_vallees.jpg"),
          alt: "Ferme des Vallées",
          name: this.$t("pages.france.accommodations.cards.ferme_vallee.title"),
          type: this.$t("pages.france.accommodations.cards.ferme_vallee.type"),
          nb_stars: require("@/assets/images/hebergements/ratings/three_stars.png"),
          ratings: this.$t(
            "pages.france.accommodations.cards.ferme_vallee.ratings"
          ),
          address: this.$t(
            "pages.france.accommodations.cards.ferme_vallee.street"
          ),
          city: this.$t("pages.france.accommodations.cards.ferme_vallee.city"),
          description: this.$t(
            "pages.france.accommodations.cards.ferme_vallee.price"
          ),
          distance: this.$t(
            "pages.france.accommodations.cards.ferme_vallee.distance"
          ),
          resa_link: "https://www.fermedesvallees.com",
        },
        {
          image: require("@/assets/images/hebergements/la_ruche.jpg"),
          alt: "La Ruche",
          name: this.$t("pages.france.accommodations.cards.ruche.title"),
          type: this.$t("pages.france.accommodations.cards.ruche.type"),
          nb_stars: require("@/assets/images/hebergements/ratings/three_stars.png"),
          ratings: this.$t("pages.france.accommodations.cards.ruche.ratings"),
          address: this.$t("pages.france.accommodations.cards.ruche.street"),
          city: this.$t("pages.france.accommodations.cards.ruche.city"),
          description: this.$t("pages.france.accommodations.cards.ruche.price"),
          distance: this.$t("pages.france.accommodations.cards.ruche.distance"),
          resa_link:
            "https://www.booking.com/hotel/fr/la-ruche-rolleboise.fr.html?aid=356980;label=gog235jc-1FCAsoTUITbGEtcnVjaGUtcm9sbGVib2lzZUgNWANoTYgBAZgBDbgBGcgBDNgBAegBAfgBAogCAagCA7gCo_WC-wXAAgHSAiRjNjE3NTBlZS0xNjQ2LTQzZGUtOWRjYS1kNzBjMjcyNTJiOTTYAgXgAgE;sid=b6d2d19353f4a9624f103a61230257c2;all_sr_blocks=91080903_200308857_0_2_0;checkin=2021-10-16;checkout=2021-10-17;dest_id=-1462401;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=91080903_200308857_0_2_0;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=91080903_200308857_0_2_0__9160;srepoch=1613334013;srpvid=245d8efea8630039;type=total;ucfs=1&",
        },
        {
          image: require("@/assets/images/liste_de_mariage/etc.jpg"),
          alt: "Autres",
          name: this.$t("pages.france.accommodations.cards.other.title"),
          type: this.$t("pages.france.accommodations.cards.other.type"),
          description: this.$t("pages.france.accommodations.cards.other.price"),
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