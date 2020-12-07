<template>
  <div>
    <AppHeaderMaurice />
    <WelcomeMru />
    <AppFooter />
  </div>
</template>

<script>
import AppHeaderMaurice from "~/components/Maurice/AppHeaderMaurice.vue"; //the maurice header is different than the france one
import WelcomeMru from "~/components/Maurice/Welcome_mru.vue";
import AppFooter from "~/components/AppFooter.vue"; //only one footer common to all the pages

export default {
  components: {
    AppHeaderMaurice,
    WelcomeMru,
    AppFooter,
  },
};
</script>

<style lang="sass">
// $hero-padding-left: 1.5rem
// $hero-padding-right: 1.5rem
// $card-footer-border-top: 0px

// @import "~/assets/css/variables_maurice.sass"
// // @import "~/assets/css/variables_france.sass"
// @import "~/node_modules/bulma/bulma.sass"
// @import "~/node_modules/bulma-timeline/src/sass/index.sass"
// @import "~/assets/css/fonts.sass"
// @import "~/assets/css/hero-custom.sass"
// @import "~/assets/css/display-components.sass"
// @import "~/assets/css/io-animations.sass"
// @import "~/assets/css/cards.sass"
// @import "~/assets/css/carousel.sass"
// @import "~/assets/css/designs.sass"
</style>
