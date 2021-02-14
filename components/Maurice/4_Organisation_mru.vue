<template>
  <section
    class="hero is-fullheight-with-navbar is-success"
    style="overflow: hidden"
  >
    <svg
      viewBox="0 0 1440 121"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill="#ffd400"
        d="M 0 64 C 347.20000000000005 64 520.8 5 868 5 L 868 5 L 868 0 L 0 0 Z"
        stroke-width="0"
      ></path>
      <path
        fill="#ffd400"
        d="M 867 5 C 1096.2 5 1210.8 38 1440 38 L 1440 38 L 1440 0 L 867 0 Z"
        stroke-width="0"
      ></path>
    </svg>
    <div class="hero-head has-text-centered observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">Divers</h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          Foire à informations
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
        <img
          class="airPlane lazyload"
          :data-src="require('~/assets/images/maurice/plane_anim/plane.png')"
        />

        <img
          class="cloud cloud1 lazyload"
          :data-src="require('~/assets/images/maurice/plane_anim/cloud.png')"
        />
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
            "Pour les billets d'avion, nous vous suggerons de prendre une compagnie assez réputée pour bénéfier de remboursement au cas où on soit encore coincé...",
        },
        {
          title: "Cap Malheureux",
          content:
            "On se marie à l'église de Cap Malheureux qui est dans le nord donc vous pouvez cherchez dans ce coin pour vos Hotels.",
        },
        {
          title: "Driving",
          content:
            'La conduite peut être sportive ("peut") et on conduit à gauche ici donc attention!',
        },
        {
          title: "Hiking",
          content:
            "Il existe de très nombreuses randonnées à l'Île Maurice donc pour les amateurs vous allez vous régaler. Vous pouvez déjà regarder les gorges de la rivière noire, les 7 cascades et encore un tas d'autres.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="sass">
.airPlane
  animation: fly 800ms ease-in-out 0s infinite alternate
  transition: top 1s
  top: 0
  position: relative
  margin: 0 auto
  margin-top: 50px
  z-index: 9999
  display: block
  width: 200px

@keyframes fly
  0%
    top: 0

  100%
    top: 15px

.cloud
  position: absolute
  bottom: 0px
  right: -500px
  opacity: 0.8
  animation: cloud 2s linear 0s infinite reverse
  z-index: 99
  width: 400px

@keyframes cloud
  from
    right: -500px

  to
    right: 102%
</style>