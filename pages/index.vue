<template>
  <section class="hero is-fullheight-with-navbar">
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
  </section>
</template>


<style scoped lang="sass">
*
  font-family: "Work Sans regular","Lato", sans-serif
</style>