<template>
  <div>
    <Welcome />
    <Informations />
    <Deroulement />
    <Hebergements />
    <Photos />
    <ListeMariage />
    <Contact />
  </div>
</template>

<script>
import Welcome from "~/components/1_Welcome.vue";
import Informations from "~/components/2_Informations.vue";
import Deroulement from "~/components/3_Deroulement.vue";
import Hebergements from "~/components/4_Hebergements.vue";
import Photos from "~/components/5_Photos.vue";
import ListeMariage from "~/components/6_ListeMariage.vue";
import Contact from "~/components/7_Contact.vue";

export default {
  components: {
    Welcome,
    Informations,
    Deroulement,
    Hebergements,
    Photos,
    ListeMariage,
    Contact
  }
};
</script>

<style lang="sass">
</style>