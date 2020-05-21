<template>
  <nav class="navbar is-fixed-top container is-fluid">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://bulma.io">
        <img
          src="@/components/images/roxetsim.png"
          alt="mariage rox et simon"
          width="112"
          height="28"
        />
      </a>

      <div class="navbar-burger burger" data-target="navWedsite">
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
          <a class="is-active" href="#informations" target>Informations</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a class="is-active" href="#deroulement" target>Deroulement</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a class="is-active" href="#hebergement" target>Hebergement</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a class="is-active" href="#photos" target>Photos</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a class="is-active" href="#listeDeMariage" target>Liste de Mariage</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a class="is-active" href="#contact" target>Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  //we need to put the JS file externally because it needs to be intanciate in hte nuxtconfig.js as "no-ssr" to run on the clients'.
  head() {
    return {
      script: [
        {
          src: "~/plugins/hamburger.js"
        }
      ]
    };
  },
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