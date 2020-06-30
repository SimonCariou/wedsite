<template>
  <section id="informations" class="hero is-fullheight-with-navbar">
    <div class="hero-head observedElement">
      <h1 class="title is-size-2-mobile is-size-1-tablet">Informations</h1>
      <h2
        class="subtitle is-size-5-mobile is-size-4-tablet"
      >Tout ce que vous avez besoin de savoir sur le lieu</h2>
      <p>Infos diverses sur le lieu et comment vous y rendre !</p>
    </div>
    <div class="hero-body observedElement">
      <div class="container">
        <div class="columns is-mobile">
          <div class="column is-11-mobile is-6-tablet">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <p>
                    <strong>ADRESSE</strong>
                    <br />78710 Jouy-Mauvoisin dans les Yvelines
                  </p>
                  <p>Petit village Francais privatise avec ses commerces et son lavoir</p>
                </div>
              </div>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img src="@/assets/images/informations/sully.jpg" alt="Sully la nuit" />
                </figure>
              </div>
            </div>
          </div>

          <div class="column is-11-mobile is-6-tablet">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <p>
                    <strong>COMMENT S'Y RENDRE</strong>
                    <br />Directement sortie A13
                  </p>
                  <p>
                    <a href="https://waze.com/ul/hu09ntssch" target="_blank" rel="noopener">
                      Ouvrir sur Waze
                      <figure
                        class="image is-32x32"
                        style="display:inline-block; vertical-align:middle; margin-left:0.25rem"
                      >
                        <img src="@/assets/images/waze_logo.png" alt="Logo Waze" />
                      </figure>
                    </a>
                  </p>
                  <p></p>
                </div>
              </div>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img src="@/assets/images/informations/map_sully.jpg" alt="Sully carte" />
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
  width: 100%
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