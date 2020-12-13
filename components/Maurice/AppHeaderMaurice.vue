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
      </div>
      <div class="navbar-end">
        <div class="navbar-item is-hoverable">
          <nuxt-link to="/France">
            <figure
              class="image is-24x24"
              style="display: inline-block; vertical-align: middle"
            >
              <img
                src="https://flagdownload.com/wp-content/uploads/Flag_of_France_Flat_Round-64x64.png"
                alt="French flag"
              /></figure
          ></nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
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
  },
  mounted() {},
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