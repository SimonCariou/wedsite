<template>
  <section class="hero is-fullheight-with-navbar is-primary is-bold">
    <div class="hero-body columns is-multiline">
      <div class="column is-full">
        <h1 class="title">Photos</h1>
        <h2 class="subtitle">Explications</h2>
      </div>
      <div class="column is-full">
        <div class="columns is-centered">
          <div class="column is-three-quarters">
            <div class="parent">
              <div class="child">
                <img src="https://via.placeholder.com/640x360" />
                <div class="caption">
                  <h3>Caption One</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
              <div class="child">
                <img src="https://via.placeholder.com/640x360" />
                <div class="caption">
                  <h3>Caption One</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
              <div class="child">
                <img src="https://via.placeholder.com/640x360" />
                <div class="caption">
                  <h3>Caption One</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
              <div class="child">
                <img src="https://via.placeholder.com/640x360" />
                <div class="caption">
                  <h3>Caption One</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
              <div class="child">
                <img src="https://via.placeholder.com/640x360" />
                <div class="caption">
                  <h3>Caption One</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
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

<style scoped>
.parent {
  display: flex;
  padding: 1rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  background-color: #000;
  overflow-x: scroll;

  scroll-snap-type: x mandatory;
}

.child img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.child {
  position: relative;
  margin: 0.5rem;
  border-radius: 10px;
  scroll-snap-align: center;
}

body {
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 300;
  background-color: #151515;
  margin: 0;
  height: 100%;
  color: #fff;
}

p {
  max-width: 60%;
  line-height: 1.25rem;
  padding-left: 1rem;
  border-left: 2px solid rgba(255, 255, 255, 0.25);
}

.child .caption {
  position: absolute;
  bottom: 0;
  padding: 1rem;
  height: 210px;
  background-color: rgba(0, 0, 0, 0.5);
}

.child:nth-child(1) {
  flex: 0 0 90%;
}

.child:nth-child(2) {
  flex: 0 0 90%;
}

.child:nth-child(3) {
  flex: 0 0 90%;
}

.child:nth-child(4) {
  flex: 0 0 90%;
}

.child:nth-child(5) {
  flex: 0 0 90%;
}
</style>

