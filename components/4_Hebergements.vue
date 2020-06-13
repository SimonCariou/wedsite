<template>
  <section id="hebergements" class="hero is-fullheight-with-navbar">
    <div class="hero-head">
      <h1 class="title is-size-3-mobile is-size-1-tablet">Hébergements</h1>
      <h2
        class="subtitle is-size-5-mobile is-size-4-tablet"
      >Liste des endroits ou dormir dans le coin.</h2>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-mobile">
          <div v-for="card in cards" :key="card.name" class="column is-11-mobile is-6-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="card.image" alt="Sully" />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p>
                    <strong>{{ card.name }}</strong>
                    <br />
                    {{ card.address }}
                  </p>
                  <p>{{ card.description }}</p>
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
          image:
            "https://cdn.kactus.com/pictures/000/163/601/large/le_village_de_sully_chambre.jpg?1574676985",
          name: "Village de Sully",
          address: "D110 78710 Jouy-Mauvoisin",
          beds: "50 couchages",
          description:
            "58e par personne, salle de bain et toilettes sur le palier"
        },
        {
          image:
            "https://cdn.kactus.com/pictures/000/163/601/large/le_village_de_sully_chambre.jpg?1574676985",
          name: "Domaine de l'oree du bois",
          address: "Chemin de la Cote Blanche 78710 Rosny-sur-Seine",
          beds: "50 couchages",
          description: "68e par personne, salle de bain et toilettes prives."
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

  .column
    scroll-snap-align: center
.card
  display: flex
  flex-direction: column
  height: 100%
  justify-content: space-between
</style>