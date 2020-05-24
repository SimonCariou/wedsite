<template>
  <section class="hero is-medium">
    <div class="hero-body columns is-multiline">
      <div class="column is-full">
        <h1 class="title">Photos</h1>
        <h2 class="subtitle">Explications</h2>
      </div>
      <div class="column is-full">
        <div class="columns is-centered">
          <div class="column is-half">
            <Carousel width="100%" height="200px">
              <div class="has-background-success">Blue</div>
              <div class="has-background-link">Green</div>
              <div class="has-background-warning">Red</div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from "~/components/Carousel.vue";

export default {
  components: {
    Carousel
  }
};
</script>
