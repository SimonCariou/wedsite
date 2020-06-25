<template>
  <section id="hebergements" class="hero is-fullheight-with-navbar">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
      <path
        fill="#f5f5f5"
        fill-opacity="1"
        d="M0,64L40,58.7C80,53,160,43,240,58.7C320,75,400,117,480,128C560,139,640,117,720,90.7C800,64,880,32,960,16C1040,0,1120,0,1200,16C1280,32,1360,64,1400,80L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      />
    </svg>
    <div class="hero-head observedElement">
      <h1 class="title is-size-3-mobile is-size-1-tablet">Hébergements</h1>
      <h2
        class="subtitle is-size-5-mobile is-size-4-tablet"
      >Liste des endroits ou dormir dans le coin.</h2>
    </div>
    <div class="hero-body observedElement">
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
    <!--SEPARATOR-->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#f5f5f5"
        fill-opacity="1"
        d="M0,32L80,53.3C160,75,320,117,480,138.7C640,160,800,160,960,186.7C1120,213,1280,267,1360,293.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>
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
  width: 100%
  max-width: 100vw

  .column
    scroll-snap-align: center
.card
  display: flex
  flex-direction: column
  height: 100%
  justify-content: space-between
</style>