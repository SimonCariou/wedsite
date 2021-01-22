<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" @click="clickOnBrand()">
        <img
          :data-src="require('~/assets/images/roxetsim.png')"
          class="lazyload"
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
          <a @click="toggleMenu()" href="/">item1</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="/">item2</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="/">item3</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="/">item4</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a @click="toggleMenu()" href="/">item5</a>
        </div>
        <div class="navbar-item is-hoverable" @click="bounce">
          <nuxt-link :to="localePath('France')">
            <figure
              class="image is-24x24"
              style="display: inline-block; vertical-align: middle"
              id="flag-fr"
            >
              <img
                src="https://flagdownload.com/wp-content/uploads/Flag_of_France_Flat_Round-64x64.png"
                alt="French flag"
              /></figure
          ></nuxt-link>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item is-hoverable" @click="toggleMenu()">
          <p>
            {{ $t("pages.france.navbar.lang_selection") }}
            <LanguageSelectionSlider />
          </p>
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

<style scoped lang="sass">
</style>