<template>
  <div>
    <div class="is-grouped buttons is-centered">
      <button class="button is-light">
        <nuxt-link :to="localePath('France')">France</nuxt-link>
      </button>

      <button class="button is-light">
        <nuxt-link :to="localePath('Maurice')">Maurice</nuxt-link>
      </button>
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
    <div>
      <p>{{ $t("hello") }}</p>
    </div>
  </div>
</template>


<style scoped lang="sass">
*
  font-family: "Work Sans regular","Lato", sans-serif
</style>