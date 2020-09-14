<template>
  <section id="hebergements" class="hero is-fullheight-with-navbar is-light">
    <div class="hero-head observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">Hébergements</h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">Où dormir dans le coin?</h2>
      </div>
    </div>

    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="explications">
          <!-- <p>
            La fête est toujours plus cool quand on peut dormir sur place
            <span class="bd-emoji">😉</span>. Il y a des chambres disponibles au Village de Sully et dans un village juste à côté pour tout le monde.
          </p>-->
          <p>Le Village est situé juste à côté de Mantes-la-Jolie, proche d'un Ibis Budget et les Uber et taxis sont à moins de 10€ par voiture.</p>
          <p></p>

          <p>
            Pour toutes questions, nous contacter via le
            <em>
              <a href="#contact">formulaire</a>
            </em> en bas de page.
          </p>
        </div>
        <div class="columns is-centered">
          <div v-for="card in cards" :key="card.name" class="column is-full-mobile is-4-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="card.image" alt="Sully" />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h3 class="is-size-5">
                    <span class="highlight">{{ card.name }}</span>
                  </h3>
                  <p>{{ card.address }}</p>
                  <p style="margin-bottom:0">{{ card.description }}</p>
                  <p>
                    <em>{{ card.distance }}</em>
                  </p>
                  <button class="button is-primary">
                    <a
                      href="https://all.accor.com/ssr/app/accor/rates/7404/index.en.shtml?dateIn=2020-12-05&nights=1&compositions=2&stayplus=false"
                      target="_blank"
                      rel="noopener"
                    >Reserver</a>
                  </button>
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
          image: "https://www.ahstatic.com/photos/7404_ho_00_p_1024x768.jpg",
          name: "Ibis Budget Mantes-la-Jolie",
          address: "19 Boulevard De Sully, 78200 Mantes-la-Jolie",
          description: "A partir de 60€/chambre double.",
          distance: "Situé à 4.5km du Village de Sully",
        },
      ],
    };
  },
};
</script>

<style scoped lang="sass">
.button
  a
    color: #fff

.card
  display: flex
  flex-direction: column
  height: 100%
  justify-content: space-between
</style>