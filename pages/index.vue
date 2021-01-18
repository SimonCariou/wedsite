<template>
  <!-- <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="is-grouped buttons is-centered">
          <button class="button is-light">
            <nuxt-link :to="localePath('France')">{{
              $t("pages.global.index.btn_fr")
            }}</nuxt-link>
          </button>

          <button class="button is-light">
            <nuxt-link :to="localePath('Maurice')">{{
              $t("pages.global.index.btn_mru")
            }}</nuxt-link>
          </button>
        </div>
        <p class="has-text-centered">
          {{ $t("pages.global.index.lang_selection") }}
        </p>
        <div class="is-grouped buttons is-centered">
          <button class="button is-light">
            <nuxt-link
              v-for="locale in $i18n.locales"
              v-if="locale.code !== $i18n.locale"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              ➡️ {{ locale.name }}</nuxt-link
            >
          </button>
        </div>

        <div class="has-text-centered">
          <p>{{ $t("pages.global.index.hello") }}</p>
        </div>
      </div>
    </div>
  </section> -->

  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-vcentered">
          <div class="column is-4-tablet is-12-mobile">
            <nuxt-link :to="localePath('France')">
              <div id="france" class="badge has-bg-image hoverable is-animated">
                <div
                  class="has-text-centered country selection is-size-2-mobile is-size-2-tablet"
                >
                  {{ $t("pages.global.index.btn_fr") }}
                </div>
              </div></nuxt-link
            >
          </div>

          <div class="column is-4-tablet is-12-mobile">
            <nuxt-link :to="localePath('Maurice')">
              <div
                id="mauritius"
                class="badge has-bg-image hoverable is-animated"
              >
                <div
                  class="has-text-centered country selection is-size-2-mobile is-size-2-tablet"
                >
                  {{ $t("pages.global.index.btn_mru") }}
                </div>
              </div></nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="sass">
.country
  &.selection
    font-family: "GTSuperDisplaySuper", "Work Sans bold", sans-serif
    color: #fff
    padding-top: 25%
.badge
  width: 250px
  height: 250px
  border-radius: 50%
  margin: auto
  &.has-bg-image
    background-size: cover
    background-position: center center
  &.is-animated
    transition: opacity 0.2s
    -webkit-transition: opacity 0.2s
    opacity: 1
  &.hoverable:hover
    opacity: 0.7

#mauritius
  background-image: url("https://i1.wp.com/www.lechotouristique.com/wp-content/uploads/2020/06/xavier-coiffic-byahlritqjo-unsplash-scaled.jpg?fit=2560%2C1707&ssl=1")
#france
  background-image: url("https://www.fne.asso.fr/sites/default/files/styles/article/public/field/image/woods-1072819_1920.jpeg?itok=EoE5pzd0")
</style>