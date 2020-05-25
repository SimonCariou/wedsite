<template>
  <nav class="navbar is-fixed-top container is-fluid">
    <div class="navbar-brand">
      <nuxt-link to="/#welcome" class="navbar-item">
        <img
          src="@/components/images/roxetsim.png"
          alt="mariage rox et simon"
          width="112"
          height="28"
        />
      </nuxt-link>

      <div class="navbar-burger burger" data-target="navWedsite">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navWedsite" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item is-hoverable">
          <nuxt-link to="/#informations" class="is-active">Informations</nuxt-link>
        </div>
        <div class="navbar-item is-hoverable">
          <nuxt-link to="/#deroulement" class="is-active">Deroulement</nuxt-link>
        </div>
        <div class="navbar-item is-hoverable">
          <nuxt-link to="/#hebergements" class="is-active">Hebergements</nuxt-link>
        </div>
        <div class="navbar-item is-hoverable">
          <nuxt-link to="/#photos" class="is-active">Photos</nuxt-link>
        </div>
        <div class="navbar-item is-hoverable">
          <nuxt-link to="/#listeDeMariage" class="is-active">Liste de Mariage</nuxt-link>
        </div>
        <div class="navbar-item is-hoverable">
          <nuxt-link to="/#contact" class="is-active">Contact</nuxt-link>
        </div>
        <div class="navbar-item is-hoverable">
          <nuxt-link to="/Jeu" class="is-active">Jeu</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dotted #ccc;
}
.header ul {
  display: flex;
}
</style>