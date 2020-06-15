<template>
  <section id="photos" class="hero is-fullheight-with-navbar">
    <div class="hero-head observedElement">
      <h1 class="title is-size-3-mobile is-size-1-tablet">Photos</h1>
      <h2 class="subtitle is-size-5-mobile is-size-4-tablet">Récapitulatif de nos 7 ans de couple.</h2>
    </div>
    <div class="hero-body observedElement">
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
                    <p>{{ card.date }}</p>
                    <p>{{ card.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          image: require("@/assets/images/scrollsnap_photos/2013.jpg"),
          alternative_description: "CDMGE",
          date: "6 Juin 2013",
          description: "Premiere CDMGE pour encourager Roxane aux pompom girls."
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2014.jpg"),
          alternative_description: "Match de football americain au Texas",
          date: "27 Novembre 2014",
          description:
            "Visite de Roxane au Texas pour voir un match de football americain universitaire."
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2015.jpg"),
          alternative_description: "Soirée EPF",
          date: "18 Avril 2015",
          description: "Soiree Versus EPF - Campagne BDE."
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2016.jpg"),
          alternative_description: "Tour Eiffel",
          date: "14 Septembre 2016",
          description: "A l'assaut de la tour Eiffel."
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2017.jpg"),
          alternative_description: "Mariage Pierre-Yves et Elodie",
          date: "13 Mai 2017",
          description: "Mariage de Pierre-Yves et Elodie Cariou."
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2018.jpg"),
          alternative_description: "Opera Garnier",
          date: "28 Aout 2018",
          description:
            "Avec un style fantome pendant l'escape game de l'Opera Garnier."
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2019.jpg"),
          alternative_description: "Paris - Hotel de Ville",
          date: "20 Avril 2019",
          description:
            "Sortie champêtre à Paris sur la place de l'hotel de ville."
        },
        {
          image: require("@/assets/images/scrollsnap_photos/2020.jpg"),
          alternative_description: "Saint Valentin 2020",
          date: "14 Fevrier 2020",
          description:
            "Apéro à l'appartement pour la Saint Valentin. Encore jeunes et innoncents, prets à être confinés pendant 3 mois."
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