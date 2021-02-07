<template>
  <!-- <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="is-grouped buttons is-centered">
          <button class="button is-light">
            <nuxt-link :to="localePath('France')">{{
              $t("pages.global.index.btn_fr")
            }}</nuxt-link>
          </button>

          <button class="button is-light">
            <nuxt-link :to="localePath('Maurice')">{{
              $t("pages.global.index.btn_mru")
            }}</nuxt-link>
          </button>
        </div>
        <p class="has-text-centered">
          {{ $t("pages.global.index.lang_selection") }}
        </p>
        <div class="is-grouped buttons is-centered">
          <button class="button is-light">
            <nuxt-link
              v-for="locale in $i18n.locales"
              v-if="locale.code !== $i18n.locale"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              ➡️ {{ locale.name }}</nuxt-link
            >
          </button>
        </div>

        
      </div>
    </div>
  </section> -->

  <section class="hero is-fullheight">
    <span class="lang_sticky">
      {{ $t("pages.global.index.lang_selection") }}
      <LanguageSelectionSlider />
    </span>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-vcentered">
          <div class="column is-4-tablet is-12-mobile">
            <nuxt-link :to="localePath('France')">
              <div id="france" class="badge has-bg-image hoverable is-animated">
                <div
                  class="has-text-centered country selection is-size-2-mobile is-size-2-tablet"
                >
                  {{ $t("pages.global.index.btn_fr") }}
                </div>
              </div></nuxt-link
            >
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
                </div>
              </div></nuxt-link
            >
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
  position: absolute
  bottom: 0
  padding-bottom: 5px
  padding-top: 5px
  padding-left: 10px
  width: 100%
  // background-color: rgba(222, 222, 222, 0.3)
  // box-shadow: 0px 0px 10px 10px rgba(222, 222, 222, 0.3)
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
  &.is-animated
    transition: all 0.2s ease-in-out
    -webkit-transition: all 0.2s ease-in-out
    opacity: 1
  &.hoverable:hover
    opacity: 0.8
    transform: scale(1.1,1.1)

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