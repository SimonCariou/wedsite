<template>
  <section class="hero is-fullheight-with-navbar is-warning">
    <div class="hero-head has-text-centered observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          Bienvenue à Maurice!
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          Jolis panoramas
        </h2>
      </div>
    </div>
    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="columns is-centered is-variable is-8-tablet is-3-mobile">
          <div class="column is-6-tablet is-12-mobile">
            <div class="box explications">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit erat ac nibh consectetur interdum. Praesent sed massa
              massa. Praesent eu tellus neque. Duis aliquet eros eu.
            </div>
          </div>
          <div class="column is-6-tablet is-12-mobile">
            <!-- <div id="panorama"></div> -->
            <figure class="image is-3by2">
              <img
                :data-src="
                  require('~/assets/images/maurice/places/cap-malheureux.jpg')
                "
                alt="Flic en Flac"
                class="lazyload"
                style="
                  background-size: cover;
                  background-position: center center;
                  border-radius: 0.75rem;
                "
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    //Go get images here: https://www.flickr.com/search/?orientation=panorama&media=photos&text=mauritius&advanced=1&dimension_search_mode=min&height=1024&width=1024
    // pannellum.viewer("panorama", {
    //   type: "equirectangular",
    //   panorama:
    //     "https://live.staticflickr.com/718/21499976951_1e702cff33_o_d.jpg",
    //   autoLoad: true,
    // });
  },
};
</script>

<style scoped lang="sass">
</style>