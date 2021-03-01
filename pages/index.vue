<template>
  <section class="hero is-large" style="overflow: hidden">
    <span class="lang_sticky">
      {{ $t("pages.global.index.lang_selection") }}
      <LanguageSelectionSlider />
    </span>
    <div class="hero-body pt-6">
      <div class="container">
        <div class="columns is-centered is-vcentered">
          <div class="column is-4-tablet is-12-mobile">
            <nuxt-link :to="localePath('France')">
              <div id="france" class="badge has-bg-image hoverable is-animated">
                <div
                  class="has-text-centered country selection is-size-2-mobile is-size-2-tablet"
                >
                  {{ $t("pages.global.index.btn_fr") }}
                  <div>
                    <figure
                      class="image is-32x32"
                      style="display: inline-block; vertical-align: middle"
                      id="flag-fr"
                    >
                      <img
                        src="https://flagdownload.com/wp-content/uploads/Flag_of_France-64x43.png"
                        alt="French flag"
                      />
                    </figure>
                  </div>
                </div></div
            ></nuxt-link>
          </div>

          <div class="column is-4-tablet is-12-mobile">
            <nuxt-link :to="localePath('Maurice')">
              <div
                id="mauritius"
                class="badge has-bg-image hoverable is-animated"
              >
                <div
                  class="has-text-centered country selection is-size-2-mobile is-size-2-tablet"
                >
                  {{ $t("pages.global.index.btn_mru") }}
                  <div>
                    <figure
                      class="image is-32x32"
                      style="display: inline-block; vertical-align: middle"
                      id="flag-fr"
                    >
                      <img
                        src="https://flagdownload.com/wp-content/uploads/Flag_of_Mauritius-64x43.png"
                        alt="French flag"
                      />
                    </figure>
                  </div>
                </div></div
            ></nuxt-link>
          </div>
        </div>
        <!-- <div class="has-text-centered">
          <p>{{ $t("pages.global.index.hello") }}</p>
        </div> -->
      </div>
    </div>
  </section>
</template>


<style scoped lang="sass">
.lang_sticky
  position: sticky
  top: 0
  padding-bottom: 5px
  padding-top: 5px
  padding-left: 10px
  width: 100%

.country
  &.selection
    font-family: "Bodoni Moda","GTSuperDisplaySuper", "Work Sans bold", sans-serif
    color: #fff
    padding-top: 20%
    font-weight: 700
.badge
  width: 250px
  height: 250px
  border-radius: 50%
  margin: auto
  &.has-bg-image
    background-size: cover
    background-position: center center

#mauritius
  background-image: url('~assets/images/index/maurice.jpg')
#france
  background-image: url('~assets/images/index/france.jpg')
</style>

<script>
import LanguageSelectionSlider from "~/components/Slider.vue";

export default {
  components: { LanguageSelectionSlider },
};
</script>