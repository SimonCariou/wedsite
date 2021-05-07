<template>
  <div class="has-navbar-fixed-top">
    <AppHeaderMaurice />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeaderMaurice from "~/components/Maurice/AppHeaderMaurice.vue"; //the maurice header is different than the france one
import AppFooter from "~/components/AppFooter.vue"; //only one footer common to all the pages

export default {
  components: {
    AppHeaderMaurice,
    AppFooter,
  },
};
</script>