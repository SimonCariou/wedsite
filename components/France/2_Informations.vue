<template>
  <section id="informations" class="hero is-fullheight is-light">
    <div class="hero-head observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          {{ $t("pages.france.information.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.france.information.subtitle") }}
        </h2>
      </div>
    </div>
    <div class="hero-body observedElement section-body">
      <div class="container">
        <!-- <div class="explications">
          <p>Vous trouverez ici plein de choses sur comment vous rendre au village de Sully</p>
        </div>-->
        <div
          class="columns is-mobile scroll-ctn is-centered-tablet is-variable is-8-tablet"
        >
          <div class="column is-11-mobile is-4-tablet">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h3 class="is-size-5">
                    <span class="highlight">{{
                      $t("pages.france.information.cards.address.title")
                    }}</span>
                  </h3>
                  <p>
                    <br />{{
                      $t("pages.france.information.cards.address.content")
                    }}
                  </p>
                  <p>
                    {{
                      $t("pages.france.information.cards.address.description")
                    }}
                  </p>
                </div>
              </div>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    :data-src="
                      require('~/assets/images/informations/sully.jpg')
                    "
                    alt="Sully la nuit"
                    class="lazyload"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-11-mobile is-4-tablet">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h3 class="is-size-5 subsubtitle">
                    <span class="highlight">{{
                      $t("pages.france.information.cards.directions.title")
                    }}</span>
                  </h3>
                  <p>
                    <br />{{
                      $t("pages.france.information.cards.directions.content")
                    }}
                  </p>
                  <div style="padding-bottom: 1rem">
                    <a
                      href="https://waze.com/ul/hu09ntssch"
                      target="_blank"
                      rel="noopener"
                    >
                      {{ $t("pages.france.information.cards.directions.waze") }}
                      <figure
                        class="image is-32x32"
                        style="
                          display: inline-block;
                          vertical-align: middle;
                          margin-left: 0.25rem;
                        "
                      >
                        <img
                          :data-src="require('~/assets/images/waze_logo.png')"
                          alt="Logo Waze"
                          class="lazyload"
                        />
                      </figure>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://goo.gl/maps/QEs6qQ1i8HA3p9YT9"
                      target="_blank"
                      rel="noopener"
                    >
                      {{
                        $t("pages.france.information.cards.directions.google")
                      }}
                      <figure
                        class="image is-32x32"
                        style="
                          display: inline-block;
                          vertical-align: middle;
                          margin-left: 0.25rem;
                        "
                      >
                        <img
                          :data-src="
                            require('~/assets/images/google-maps_logo.png')
                          "
                          alt="Logo Google Maps"
                          class="lazyload"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    :data-src="
                      require('~/assets/images/informations/map_sully.jpg')
                    "
                    alt="Sully carte"
                    class="lazyload"
                  />
                  <!-- <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.607569389974!2d1.6524822155735763!3d48.97999420009076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6b9b378c1c355%3A0x56036d031fc3031e!2sLE%20VILLAGE%20DE%20SULLY!5e0!3m2!1sen!2sfr!4v1598804770258!5m2!1sen!2sfr"
                    frameborder="0"
                    style="border:0;"
                    aria-hidden="false"
                    tabindex="0"
                    allowfullscreen
                    class="has-ratio"
                  ></iframe>-->
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// export default {
//   data() {
//     return {
//       cards: [
//         {
//           title: "ADRESSE",
//           description: "78710 Jouy-Mauvoisin dans les Yvelines",
//           content: "Village de Sully",
//           description:
//             "Petit village Francais privatise avec ses commerces et son lavoir",
//           media: "@/assets/images/sully.jpg"
//         },
//         {
//           title: "COMMENT S'Y RENDRE",
//           description: "Directement sortie A13",
//           content: "Village de Sully",
//           description:
//             "Petit village Francais privatise avec ses commerces et son lavoir",
//           media: "@/assets/images/sully.jpg"
//         }
//       ]
//     };
//   }
// };
</script>

<style scoped lang="sass">
@import "~bulma/sass/utilities/_all"
.columns
  overflow-x: scroll
  -webkit-overflow-scrolling: touch
  scroll-snap-type: x mandatory
  max-width: 100vw

  .column
    scroll-snap-align: center
.card
  display: flex
  flex-direction: column
  height: 100%
  justify-content: space-between

  .card-image
    figure
      img, iframe
        border-radius: 0 0 15px 15px
</style>