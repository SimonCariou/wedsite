<template>
  <section class="hero is-fullheight-with-navbar is-warning">
    <div class="hero-head has-text-centered observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">Organisation</h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          On vous propose des choses.
        </h2>
      </div>
    </div>
    <div class="hero-body observedElement section-body">
      <div class="container">
        <div
          class="columns is-centered is-variable is-8-tablet is-3-mobile is-multiline"
        >
          <div
            class="column is-5-tablet is-12-mobile"
            v-for="box in boxes"
            :key="box.title"
          >
            <div class="box explications">
              {{ box.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      boxes: [
        {
          title: "Plane",
          content:
            "Pour les billets d'avion, nous vous suggerons AirFrance car ils  remboursent sous forme d'avoir",
        },
        {
          title: "Cap Malheureux",
          content:
            "On se marie à l'église de Cap Malheurex qui est dans le nord donc cherchez dans ce coin pour vos Hotels ;)",
        },
        {
          title: "Driving",
          content: "On conduit à gauche ici donc Attention!",
        },
        {
          title: "Hiking",
          content:
            "Il existe de très nombreusese randonnées à l'Île Maurice donc pour les amateurs vous allez vous régaler.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="sass">
</style>