<template>
  <section id="informations" class="hero is-fullheight-with-navbar">
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style="position: absolute; top: calc(100vh + 100); left:15%; width:50%;"
    >
      <path
        fill="#F5F5F5"
        d="M45.9,-59.4C60.2,-52.9,72.8,-40.3,77.3,-25.4C81.7,-10.4,78.1,6.9,67.2,16.1C56.3,25.4,38.3,26.6,25.9,36.1C13.5,45.5,6.7,63.2,-4.3,69.2C-15.4,75.1,-30.8,69.4,-35.4,57.4C-40,45.4,-33.9,27.2,-31,15.1C-28.1,2.9,-28.4,-3.2,-30.8,-14.4C-33.2,-25.5,-37.6,-41.7,-32.8,-51.3C-28.1,-60.8,-14,-63.7,0.9,-65C15.9,-66.2,31.7,-65.8,45.9,-59.4Z"
        transform="translate(100 100)"
      />
    </svg>

    <div class="hero-head observedElement">
      <h1 class="title is-size-3-mobile is-size-1-tablet">Informations</h1>
      <h2
        class="subtitle is-size-5-mobile is-size-4-tablet"
      >Tout ce que vous avez besoin de savoir sur le lieu</h2>
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
                  <img src="@/assets/images/sully.jpg" alt="Sully" />
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
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.607569389974!2d1.6524822155735763!3d48.97999420009076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6b9b378c1c355%3A0x56036d031fc3031e!2sLE%20VILLAGE%20DE%20SULLY!5e0!3m2!1sen!2sfr!4v1590081892934!5m2!1sen!2sfr"
                    frameborder="0"
                    style="border:0;"
                    aria-hidden="false"
                    tabindex="0"
                    allowfullscreen
                    class="has-ratio"
                  ></iframe>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
      <path
        fill="#f5f5f5"
        fill-opacity="1"
        d="M0,32L80,69.3C160,107,320,181,480,202.7C640,224,800,192,960,160C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
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