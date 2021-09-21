<template>
  <div>
    <WelcomeMru />
    <InfosMru />
    <WeddingDayMru />
    <WhatToDoMru />
    <OrganisationMru />
    <RSVPMru />
  </div>
</template>

<script>
import WelcomeMru from "~/components/Maurice/1_Welcome_mru.vue";
import InfosMru from "~/components/Maurice/2_1_Infos_mru.vue";
import WeddingDayMru from "~/components/Maurice/2_2_Wedding_Day_mru.vue";
import WhatToDoMru from "~/components/Maurice/3_WhatToDo_mru.vue";
import OrganisationMru from "~/components/Maurice/4_Organisation_mru.vue";
import RSVPMru from "~/components/Maurice/5_RSVP_mru.vue";

export default {
  components: {
    WelcomeMru,
    InfosMru,
    WhatToDoMru,
    OrganisationMru,
    RSVPMru,
  },
  layout: "maurice_layout",
  data: () => ({ observerTitle: null, observerBody: null, intersected: false }),
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (var i in entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
            } else {
              //entry.target.classList.remove("in-view");
            }
          });
        }
      },
      {
        threshold: 0.25,
      }
    );

    var items = this.$el.querySelectorAll(".observedElement");
    for (var i in items) {
      if (!items.hasOwnProperty(i)) {
        continue;
      }

      this.observer.observe(items[i]);
    }
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
// @import "~/assets/css/Maurice/mru_font_styling.sass"
</style>
