<template>
  <section class="hero is-fullheight-with-navbar is-success" id="introduction">
    <div class="hero-head has-text-centered observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          {{ $t("pages.mauritius.introduction.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.mauritius.introduction.subtitle") }}
        </h2>
      </div>
    </div>
    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="columns is-centered is-variable is-8-tablet is-3-mobile">
          <div class="column is-6-tablet is-12-mobile" style="height: 100%">
            <div class="box explications">
              <p class="block">
                {{ $t("pages.mauritius.introduction.box.first") }}
              </p>
              <p class="block">
                {{ $t("pages.mauritius.introduction.box.second") }}
              </p>
            </div>
          </div>
          <div class="column is-6-tablet is-12-mobile">
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
  mounted() {},
};
</script>

<style scoped lang="sass">
</style>