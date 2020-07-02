<template>
  <section id="informations" class="hero is-fullheight-with-navbar">
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style="position: absolute; top: calc(100vh + 100); left:15%; width:50%;"
    >
      <path
        fill="#F5F5F5"
        d="M67.6,-42.6C78.8,-19.6,73,9.6,58.9,27.1C44.8,44.6,22.4,50.4,-2.2,51.6C-26.8,52.9,-53.5,49.6,-64,34.2C-74.5,18.8,-68.7,-8.7,-55.3,-33C-41.9,-57.3,-20.9,-78.3,3.6,-80.4C28.2,-82.4,56.4,-65.6,67.6,-42.6Z"
        transform="translate(100 100)"
      />
    </svg>

    <div class="hero-head observedElement">
      <h1 class="title is-size-2-mobile is-size-1-tablet">Informations</h1>
      <h2
        class="subtitle is-size-5-mobile is-size-4-tablet"
      >Tout ce que vous avez besoin de savoir sur le lieu</h2>
    </div>

    <div class="hero-body observedElement">
      <div class="container">
        <div class="explications">
          <p>Infos diverses sur le lieu et comment vous y rendre !</p>
        </div>
        <div class="columns is-mobile scroll-ctn">
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
      <path
        fill="#f5f5f5"
        fill-opacity="1"
        d="M0,256L26.7,240C53.3,224,107,192,160,197.3C213.3,203,267,245,320,261.3C373.3,277,427,267,480,261.3C533.3,256,587,256,640,213.3C693.3,171,747,85,800,90.7C853.3,96,907,192,960,218.7C1013.3,245,1067,203,1120,186.7C1173.3,171,1227,181,1280,186.7C1333.3,192,1387,192,1413,192L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
      />
    </svg>
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