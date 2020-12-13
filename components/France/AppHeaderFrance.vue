<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" @click="clickOnBrand()">
        <img
          src="@/assets/images/roxetsim.png"
          alt="mariage rox et simon"
          width="112"
          height="28"
        />
      </a>

      <div
        @click="toggleMenu()"
        class="navbar-burger burger"
        :class="{ 'is-active': isMenuOpen }"
        data-target="navWedsite"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div
      id="navWedsite"
      class="navbar-menu"
      :class="{ 'is-active': isMenuOpen }"
    >
      <div class="navbar-start">
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="#news">🔔NEWS</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="#informations">Informations</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="#deroulement">Deroulement</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="#hebergements">Hebergements</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="#photos">Photos</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="#listeDeMariage">Liste de Mariage</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="#contact">Contact</a>
        </div>
        <!-- <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="/Jeu" class="is-size-8">Jeu</a>
        </div> -->
      </div>
      <div class="navbar-end">
        <div class="navbar-item is-hoverable">
          <LanguageSelectionSlider />
        </div>
        <div class="navbar-item is-hoverable" @click="bounce">
          <nuxt-link :to="localePath('Maurice')">
            <figure
              class="image is-24x24"
              style="display: inline-block; vertical-align: middle"
              id="flag-mru"
            >
              <img
                src="https://flagdownload.com/wp-content/uploads/Flag_of_Mauritius_Flat_Round-64x64.png"
                alt="Mauritian flag"
              /></figure
          ></nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageSelectionSlider from "~/components/Slider.vue";

export default {
  components: { LanguageSelectionSlider },
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false,
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
    clickOnBrand() {
      this.closeMenu();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    bounce: function (event) {
      event.target.classList.toggle("bouncy");
    },
  },
  mounted() {},
};
</script>
