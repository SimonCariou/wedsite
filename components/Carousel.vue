<template>
  <div class="carousel-wrapper">
    <div class="carousel" :style="{ width, height }">
      <slot />
    </div>
    <button @click="changeSlide(-1)">Prev Slide</button>
    <button @click="changeSlide(1)">Next Slide</button>
  </div>
</template>

<script>
export default {
  props: ["width", "height"],
  methods: {
    changeSlide(delta) {
      const carousel = this.$el.querySelector(".carousel");
      const width = carousel.offsetWidth;
      carousel.scrollTo(carousel.scrollLeft + width * delta, 0);
    }
  }
};
</script>

<style scoped>
.carousel {
  display: flex;
  overflow: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel > * {
  flex: 1 0 90%;
  scroll-snap-align: start;
}
</style>