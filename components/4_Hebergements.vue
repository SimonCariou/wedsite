<template>
  <section id="hebergements" class="hero is-fullheight-with-navbar is-danger">
    <!--SEPARATOR-->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
      <path
        fill="#f5f5f5"
        fill-opacity="1"
        d="M0,64L120,64C240,64,480,64,720,80C960,96,1200,128,1320,144L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      />
    </svg>
    <div class="hero-head observedElement">
      <h1 class="title is-size-2-mobile is-size-1-tablet">Hébergements</h1>
      <h2 class="subtitle is-size-5-mobile is-size-4-tablet">Où dormir dans le coin?</h2>
    </div>

    <div class="hero-body observedElement">
      <div class="container">
        <div class="explications">
          <p>
            La fête est toujours plus cool quand on peut dormir sur place
            <span class="bd-emoji">😉</span>. Il y a des chambres disponibles au Village de Sully et dans un village juste à côté pour tout le monde.
          </p>

          <p>
            Nous contacter via le
            <em>
              <a href="#contact">formulaire</a>
            </em> en bas de page.
          </p>
        </div>
        <div class="columns is-mobile scroll-ctn">
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
      <path fill="#fff" fill-opacity="1" d="M0,160L1440,256L1440,320L0,320Z" />
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