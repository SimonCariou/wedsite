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
    Contact,
  },
  data: () => ({ observerTitle: null, observerBody: null, intersected: false }),
  head: {
    title: "R&S - Wedsite",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Bienvenue sur notre wedsite, toutes les infos sur le fameux 5 décembre 2020. Le site sera mis à jour très souvent au fur et à mesures des préparatifs. Bisous à tous!",
      },
    ],
  },
  mounted() {
    this.observerTitle = new IntersectionObserver(
      (entries) => {
        for (var i in entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view-title");
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

    this.observerBody = new IntersectionObserver(
      (entries) => {
        for (var i in entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view-body");
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

    var itemsTitle = this.$el.querySelectorAll(".observedElementTitle");
    for (var i in itemsTitle) {
      if (!itemsTitle.hasOwnProperty(i)) {
        continue;
      }

      this.observerTitle.observe(itemsTitle[i]);
    }

    var itemsBody = this.$el.querySelectorAll(".observedElementBody");
    for (var i in itemsBody) {
      if (!itemsBody.hasOwnProperty(i)) {
        continue;
      }
      this.observerBody.observe(itemsBody[i]);
    }
  },
};
</script>

<style lang="sass">
</style>