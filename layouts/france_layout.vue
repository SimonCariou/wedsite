<template>
  <div class="has-navbar-fixed-top">
    <AppHeaderFrance />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeaderFrance from "~/components/France/AppHeaderFrance.vue"; //the maurice header is different than the france one
import AppFooter from "~/components/AppFooter.vue"; //only one footer common to all the pages

export default {
  components: {
    AppHeaderFrance,
    AppFooter,
  },
};
</script>

<style scoped lang="sass">
</style>