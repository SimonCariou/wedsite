<template>
  <section class="hero is-fullheight-with-navbar is-light">
    <div class="hero-head observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          Que faire à Maurice ??
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          Indice: Plein de trucs.
        </h2>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <div
          class="columns is-mobile is-multiline is-variable is-8-tablet is-3-mobile is-centered"
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
              <div class="card-content">
                <div class="content">
                  <div>
                    <p>{{ card.title }}</p>
                  </div>
                  <div class="price">
                    <p>{{ card.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-mobile is-multiline">
          <div class="column is-6-mobile">1</div>
          <div class="column is-6-mobile">2</div>
          <div class="column is-6-mobile">3</div>
          <div class="column is-6-mobile">4</div>
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
          image: require("@/assets/images/maurice/flic-en-flac.jpg"),
          alternative_description: "",
          title: "Flic en Flac",
          //   description: this.$t(
          //     "pages.france.registry.cards.hawaii.description"
          //   ),
          description: "Trop stylé et trop joli",
        },
        {
          image: require("@/assets/images/maurice/flic-en-flac.jpg"),
          alternative_description: "",
          title: "Le Morne",
          //   description: this.$t(
          //     "pages.france.registry.cards.hawaii.description"
          //   ),
          description: "Trop stylé et trop joli",
        },
        {
          image: require("@/assets/images/maurice/flic-en-flac.jpg"),
          alternative_description: "",
          title: "Cap Malheureux",
          //   description: this.$t(
          //     "pages.france.registry.cards.hawaii.description"
          //   ),
          description: "Trop stylé et trop joli",
        },
        {
          image: require("@/assets/images/maurice/flic-en-flac.jpg"),
          alternative_description: "",
          title: "Gris-Gris",
          //   description: this.$t(
          //     "pages.france.registry.cards.hawaii.description"
          //   ),
          description: "Trop stylé et trop joli",
        },
        {
          image: require("@/assets/images/maurice/flic-en-flac.jpg"),
          alternative_description: "",
          title: "Chamarel",
          //   description: this.$t(
          //     "pages.france.registry.cards.hawaii.description"
          //   ),
          description: "Trop stylé et trop joli",
        },
        {
          image: require("@/assets/images/maurice/flic-en-flac.jpg"),
          alternative_description: "",
          title: "Blue Bay",
          //   description: this.$t(
          //     "pages.france.registry.cards.hawaii.description"
          //   ),
          description: "Trop stylé et trop joli",
        },
      ],
    };
  },
};
</script>

<style scoped lang="sass">
</style>