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