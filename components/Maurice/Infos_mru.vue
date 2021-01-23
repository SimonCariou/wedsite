<template>
  <section class="hero is-fullheight-with-navbar is-light">
    <div class="hero-head observedElement section-title">
      <div class="container">
        <h1 class="is-size-2-mobile is-size-1-tablet">Intro Maurice</h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          Jolis panoramas
        </h2>
      </div>
    </div>
    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6-tablet is-12-mobile">
            <div class="explications">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit erat ac nibh consectetur interdum. Praesent
                sed massa massa. Praesent eu tellus neque. Duis aliquet eros eu.
              </p>
            </div>
          </div>
          <div class="column is-6-tablet is-12-mobile">
            <div id="panorama"></div>
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
    pannellum.viewer("panorama", {
      type: "equirectangular",
      panorama:
        "https://live.staticflickr.com/718/21499976951_1e702cff33_o_d.jpg",
      autoLoad: true,
    });
  },
};
</script>

<style scoped lang="sass">
</style>