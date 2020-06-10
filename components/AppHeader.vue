<template>
  <nav class="navbar is-fixed-top container is-full-width">
    <div class="navbar-brand">
      <nuxt-link to="/#welcome" class="navbar-item">
        <img
          src="@/components/images/roxetsim.png"
          alt="mariage rox et simon"
          width="112"
          height="28"
        />
      </nuxt-link>

      <div
        onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');document.querySelector('.navbar-burger').classList.toggle('is-active')"
        class="navbar-burger burger"
        data-target="navWedsite"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navWedsite" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item is-hoverable">
          <a
            href="/#informations"
            class="is-active"
            onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');document.querySelector('.navbar-burger').classList.toggle('is-active')"
          >Informations</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a
            href="/#deroulement"
            class="is-active"
            onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');document.querySelector('.navbar-burger').classList.toggle('is-active')"
          >Deroulement</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a
            href="/#hebergements"
            class="is-active"
            onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');document.querySelector('.navbar-burger').classList.toggle('is-active')"
          >Hebergements</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a
            href="/#photos"
            class="is-active"
            onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');document.querySelector('.navbar-burger').classList.toggle('is-active')"
          >Photos</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a
            href="/#listeDeMariage"
            class="is-active"
            onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');document.querySelector('.navbar-burger').classList.toggle('is-active')"
          >Liste de Mariage</a>
        </div>
        <div class="navbar-item is-hoverable">
          <a
            href="/#contact"
            class="is-active"
            onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');document.querySelector('.navbar-burger').classList.toggle('is-active')"
          >Contact</a>
        </div>
        <!--
        <div class="navbar-item is-hoverable">
          <nuxt-link
            to="/Jeu"
            class="is-active"
            onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');document.querySelector('.navbar-burger').classList.toggle('is-active')"
          >Jeu</nuxt-link>
        </div>
        -->
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