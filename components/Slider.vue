<template>
  <span style="padding-left: 5px">
    <figure
      class="image is-24x24"
      style="display: inline-block; vertical-align: middle"
    >
      <nuxt-link
        v-for="locale in $i18n.locales"
        v-if="locale.code !== $i18n.locale"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        <img
          v-show="locale.code === 'fr'"
          src="https://flagdownload.com/wp-content/uploads/Flag_of_France_Flat_Round_Corner-64x64.png" />
        <img
          v-show="locale.code === 'en'"
          src="https://flagdownload.com/wp-content/uploads/Flag_of_United_Kingdom_Flat_Round_Corner-64x64.png"
      /></nuxt-link>
    </figure>

    <!-- <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label> -->
  </span>
</template>

<script >
export default {
  name: "LanguageSelectionSlider",
};
</script>

<style scoped lang="sass">
.switch
  position: relative
  display: inline-block
  width: 42px
  height: 24px
  & input
    opacity: 0
    width: 0
    height: 0

.slider
  position: absolute
  cursor: pointer
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: url('~assets/images/language_selection_slider/switch-fr.png')
  background-size: cover
  -webkit-transition: .4s
  transition: .4s

  &:before
    position: absolute
    content: ""
    height: 24px
    width: 24px
    left: 0px
    bottom: 0px
    background-color: white
    -webkit-transition: .4s
    transition: .4s
    border: 1px solid #ccc

input:checked + .slider
  background: url('~assets/images/language_selection_slider/switch-en.png')
  background-size: cover

input:focus + .slider
  box-shadow: 0 0 1px #ccc

input:checked + .slider:before
  -webkit-transform: translateX(19px)
  -ms-transform: translateX(19px)
  transform: translateX(19px)
.slider.round
  border-radius: 34px

  &:before
    border-radius: 50%
</style>