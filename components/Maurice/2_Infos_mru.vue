<template>
  <section class="hero is-fullheight-with-navbar is-success">
    <div class="hero-head has-text-centered observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          Bienvenue à Maurice!
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          Un brin d'explications 😉
        </h2>
      </div>
    </div>
    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="columns is-centered is-variable is-8-tablet is-3-mobile">
          <div class="column is-6-tablet is-12-mobile" style="height: 100%">
            <div class="box explications">
              <p class="block">
                Comme vous le savez sûrement tous, on a décidé de se marier à
                Maurice quelques jours après la France. Vous êtes bien entendu
                tous invités pour venir célébrer avec nous le mariage religieux
                qui aura lieu à Cap Malheureux le 27 Octobre 2021.
              </p>
              <p class="block">
                Le programme là bas n'est pas encore défini mais le sera sous
                peu. Nous nous doutons que nombre d'entre vous demandez encore
                comment la situation va évoluer mais par chance les compagnies
                aériennes allant à Maurice proposent des assurances annulation
                assez efficaces (Air France notamment). A l'heure actuelle on
                peut trouver des billets à 800-900 euros.
              </p>
            </div>
          </div>
          <div class="column is-6-tablet is-12-mobile">
            <figure class="image is-3by2">
              <img
                :data-src="
                  require('~/assets/images/maurice/places/cap-malheureux.jpg')
                "
                alt="Flic en Flac"
                class="lazyload"
                style="
                  background-size: cover;
                  background-position: center center;
                  border-radius: 0.75rem;
                "
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style scoped lang="sass">
</style>