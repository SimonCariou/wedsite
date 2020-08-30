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
import Welcome from "~/components/1_1_Welcome.vue";
import News from "~/components/1_2_News.vue";
import Informations from "~/components/2_Informations.vue";
import Deroulement from "~/components/3_Deroulement.vue";
import Hebergements from "~/components/4_Hebergements.vue";
import Photos from "~/components/5_Photos.vue";
import ListeMariage from "~/components/6_ListeMariage.vue";
import Contact from "~/components/7_Contact.vue";

export default {
  components: {
    Welcome,
    News,
    Informations,
    Deroulement,
    Hebergements,
    Photos,
    ListeMariage,
    Contact
  },
  data: () => ({ observer: null, intersected: false }),
  mounted() {
    this.observer = new IntersectionObserver(
      entries => {
        for (var i in entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              console.log("entry.isIntersecting: " + entry.isIntersecting);
              entry.target.classList.add("in-view");
            } else {
              entry.target.classList.remove("in-view");
            }
          });
        }
      },
      {
        threshold: 0.25
      }
    );

    var items = this.$el.querySelectorAll(".observedElement");

    for (var i in items) {
      if (!items.hasOwnProperty(i)) {
        continue;
      }

      this.observer.observe(items[i]);
    }
  }
};
</script>

<style lang="sass">
</style>