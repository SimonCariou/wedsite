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
};
</script>
