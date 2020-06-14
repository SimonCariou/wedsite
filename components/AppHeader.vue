<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" @click="clickOnBrand()">
        <img
          src="@/components/images/roxetsim.png"
          alt="mariage rox et simon"
          width="112"
          height="28"
        />
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
          <a @click="clickOnItem(1)">Informations</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="clickOnItem(2)">Deroulement</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="clickOnItem(3)">Hebergements</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="clickOnItem(4)">Photos</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="clickOnItem(5)">Liste de Mariage</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="clickOnItem(6)">Contact</a>
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
    },
    closeMenu() {
      if (this.isMenuOpen) {
        this.isMenuOpen = false;
      } else {
      }
    },
    clickOnItem(index) {
      this.toggleMenu();
      this.scrollTo((window.innerHeight - 52) * index);
    },
    clickOnBrand() {
      this.closeMenu();
      this.scrollTo(0);
    },
    scrollTo(top) {
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  }
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