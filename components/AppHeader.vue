<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" @click="clickOnBrand()">
        <img src="@/assets/images/roxetsim.png" alt="mariage rox et simon" width="112" height="28" />
      </a>

      <div
        @click="toggleMenu()"
        class="navbar-burger burger"
        :class="{'is-active': isMenuOpen}"
        data-target="navWedsite"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navWedsite" class="navbar-menu" :class="{'is-active': isMenuOpen}">
      <div class="navbar-start">
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="/#news">🔔NEWS</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="/#informations">Informations</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="/#deroulement">Deroulement</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="/#hebergements">Hebergements</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="/#photos">Photos</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="/#listeDeMariage">Liste de Mariage</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="/#contact">Contact</a>
        </div>
        <!--
        <div class="navbar-item is-hoverable">
          <nuxt-link
            to="/Jeu"

             @click="toggleMenu()">Jeu</nuxt-link>
        </div>
        -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      console.log("toggle");
    },
    closeMenu() {
      if (this.isMenuOpen) {
        this.isMenuOpen = false;
      } else {
      }
    },
    clickOnBrand() {
      this.closeMenu();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  mounted() {}
};
</script>

<style scoped>
/* .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dotted #ccc;
}
.header ul {
  display: flex;
} */
</style>