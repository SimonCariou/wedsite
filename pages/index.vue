<template>
  <div class>
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
import Welcome from "~/components/Welcome.vue";
import Informations from "~/components/Informations.vue";
import Deroulement from "~/components/Deroulement.vue";
import Hebergements from "~/components/Hebergements.vue";
import Photos from "~/components/Photos.vue";
import ListeMariage from "~/components/ListeMariage.vue";
import Contact from "~/components/Contact.vue";

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
