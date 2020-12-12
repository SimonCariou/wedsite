<template>
  <div>
    <Welcome />
    <News />
    <Informations />
    <Deroulement />
    <Hebergements />
    <Photos />
    <ListeMariage />
    <Contact />
  </div>
</template>

<script>
import Welcome from "~/components/France/1_1_Welcome.vue";
import News from "~/components/France/1_2_News.vue";
import Informations from "~/components/France/2_Informations.vue";
import Deroulement from "~/components/France/3_Deroulement.vue";
import Hebergements from "~/components/France/4_Hebergements.vue";
import Photos from "~/components/France/5_Photos.vue";
import ListeMariage from "~/components/France/6_ListeMariage.vue";
import Contact from "~/components/France/7_Contact.vue";

export default {
  components: {
    Welcome,
    News,
    Informations,
    Deroulement,
    Hebergements,
    Photos,
    ListeMariage,
    Contact,
  },
  layout: "france_layout",
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

// // @import "~/assets/css/variables_maurice.sass"
// @import "~/assets/css/variables_france.sass"
// @import "~/node_modules/bulma/bulma.sass"
// @import "~/node_modules/bulma-timeline/src/sass/index.sass"
// @import "~/assets/css/fonts.sass"
// @import "~/assets/css/hero-custom.sass"
// @import "~/assets/css/display-components.sass"
// @import "~/assets/css/io-animations.sass"
// @import "~/assets/css/cards.sass"
// @import "~/assets/css/carousel.sass"
// @import "~/assets/css/designs.sass"
@import "~/assets/css/France/fr_font_styling.sass"
</style>
