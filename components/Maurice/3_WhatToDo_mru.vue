<template>
  <section class="hero is-info" id="what_to_do">
    <!-- <section class="hero is-info"> -->
    <svg
      viewBox="0 0 1440 121"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill="rgba(32,51,199, 1)"
        d="M 0 79 C 365.5 79 365.5 110 731 110 L 731 110 L 731 0 L 0 0 Z"
        stroke-width="0"
      ></path>
      <path
        fill="rgba(32,51,199, 1)"
        d="M 730 110 C 1085 110 1085 43 1440 43 L 1440 43 L 1440 0 L 730 0 Z"
        stroke-width="0"
      ></path>
    </svg>
    <div class="hero-head has-text-centered observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet is-uppercase">
          {{ $t("pages.mauritius.what_to_do.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.mauritius.what_to_do.subtitle") }}
        </h2>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="box explications has-text-centered">
          <p class="block">
            {{ $t("pages.mauritius.what_to_do.introduction") }}
          </p>
        </div>
        <div
          class="columns is-mobile is-multiline is-variable is-6-tablet is-3-mobile is-centered is-vcentered"
        >
          <div
            class="column is-4-tablet is-6-mobile observedElement section-body is-animated hoverable"
            v-for="card in cards"
            :key="card.title"
          >
            <div class="card">
              <div class="card-image">
                <!-- <figure class="image is-3by2">
                  <img
                    :data-src="card.image"
                    :alt="card.alternative_description"
                    class="lazyload"
                    style="
                      background-size: cover;
                      background-position: center center;
                    "
                  />
                </figure> -->
                <div class="floating-image">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    stroke-linejoin="round"
                  >
                    <clipPath :id="card.mask_name">
                      <path :d="card.path" transform="translate(100 100)" />
                    </clipPath>
                    <image
                      width="100%"
                      height="100%"
                      :clip-path="card.mask_url"
                      preserveAspectRatio="xMidYMid slice"
                      :href="card.image"
                    />
                  </svg>
                </div>
              </div>
              <div class="card-content is-overlay has-text-centered">
                <p class="is-size-4-tablet is-size-7-mobile">
                  {{ card.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: require("@/assets/images/maurice/places/flic-en-flac.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.flic_en_flac"),
          path:
            "M41.9,-47.8C55.8,-38.2,69.7,-26.5,76,-10.5C82.3,5.5,80.9,25.7,71.2,39.8C61.5,53.9,43.5,61.9,24.8,69.1C6.1,76.4,-13.2,82.8,-31.7,79.4C-50.1,76,-67.7,62.6,-78.1,44.9C-88.4,27.3,-91.5,5.3,-85.2,-12.4C-78.9,-30,-63.3,-43.4,-47.5,-52.6C-31.7,-61.8,-15.9,-66.9,-0.9,-65.7C14,-64.6,28,-57.3,41.9,-47.8Z",
          mask_name: "mask-blob1",
          mask_url: 'url("#mask-blob1")',
        },
        {
          image: require("@/assets/images/maurice/places/le-morne.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.le_morne"),
          path:
            "M35.2,-51.5C45.8,-40.7,54.8,-30.7,64.3,-17.2C73.8,-3.6,83.8,13.4,81.1,27.8C78.4,42.2,63.1,53.9,47.4,60.1C31.8,66.3,15.9,67,-0.2,67.3C-16.3,67.6,-32.6,67.5,-47.5,61C-62.3,54.5,-75.6,41.7,-81,26.1C-86.3,10.5,-83.6,-7.9,-76.4,-23.2C-69.2,-38.6,-57.6,-50.9,-44.1,-60.8C-30.6,-70.6,-15.3,-78,-1.5,-75.9C12.3,-73.8,24.6,-62.3,35.2,-51.5Z",
          mask_name: "mask-blob2",
          mask_url: 'url("#mask-blob2")',
        },
        {
          image: require("@/assets/images/maurice/places/rhumerie-chamarel.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.rhumerie_chamarel"),
          path:
            "M35.7,-48.5C51.1,-37.9,71.9,-34,81.1,-22.4C90.4,-10.7,88.2,8.6,82,26.3C75.8,44,65.5,60,51.2,68.4C36.9,76.7,18.4,77.3,3.6,72.4C-11.3,67.5,-22.6,57,-32.2,47.2C-41.7,37.3,-49.5,28,-55.7,16.4C-61.8,4.8,-66.2,-9.1,-66,-25.1C-65.9,-41.1,-61.1,-59.3,-49.3,-71.1C-37.5,-82.9,-18.8,-88.4,-4.3,-82.4C10.1,-76.5,20.2,-59.1,35.7,-48.5Z",
          mask_name: "mask-blob3",
          mask_url: 'url("#mask-blob3")',
        },
        {
          image: require("@/assets/images/maurice/places/pamplemousses.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.pamplemousses"),
          path:
            "M45.8,-36.5C57.9,-21.5,65,-2.5,61.4,14.3C57.9,31.2,43.5,45.9,26,54.5C8.5,63.1,-12.1,65.6,-29,58.2C-45.9,50.9,-59.1,33.7,-65.1,13.2C-71.1,-7.4,-70.1,-31.2,-58,-46.3C-46,-61.4,-23,-67.7,-3.1,-65.3C16.9,-62.8,33.8,-51.6,45.8,-36.5Z",
          mask_name: "mask-blob4",
          mask_url: 'url("#mask-blob4")',
        },
        {
          image: require("@/assets/images/maurice/places/chamarel-7-colors.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards._7_couleurs"),
          path:
            "M53.2,-69.3C67.8,-62.6,77.7,-45.5,82.7,-27.5C87.8,-9.4,88.1,9.6,81.8,25.8C75.5,42.1,62.7,55.4,48,62C33.3,68.6,16.7,68.5,0.4,68C-16,67.5,-31.9,66.7,-45,59.6C-58.1,52.4,-68.4,39,-69.3,25.2C-70.2,11.3,-61.6,-3,-55.9,-17.5C-50.2,-31.9,-47.4,-46.7,-38.6,-55.2C-29.7,-63.8,-14.9,-66.2,2.2,-69.3C19.3,-72.3,38.6,-76,53.2,-69.3Z",
          mask_name: "mask-blob5",
          mask_url: 'url("#mask-blob5")',
        },
        {
          image: require("@/assets/images/maurice/places/port-louis.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.port_louis"),
          path:
            "M50.5,-71C63.7,-60,71.2,-42.8,77.3,-24.9C83.4,-7,88,11.5,82.2,25.9C76.5,40.4,60.4,50.6,44.9,57.9C29.5,65.2,14.7,69.6,-1.5,71.6C-17.7,73.6,-35.4,73.3,-44,63.8C-52.7,54.3,-52.3,35.6,-52.8,20.4C-53.2,5.2,-54.5,-6.4,-54.8,-21.6C-55.1,-36.8,-54.5,-55.5,-45.2,-67.7C-36,-80,-18,-85.7,0.4,-86.2C18.7,-86.7,37.4,-81.9,50.5,-71Z",
          mask_name: "mask-blob6",
          mask_url: 'url("#mask-blob6")',
        },
      ],
    };
  },
};
</script>

<style scoped lang="sass">
p
  hyphens: manual
  -webkit-hyphens: auto
  -moz-hyphens: auto
  -ms-hyphens: auto
  word-break: break-word

.card-content
  p
    font-family: "Libre Baskerville", "Bodoni Moda"
    color: white
    font-weight: 700
    text-shadow: 2px 2px 4px black
    padding-top: 20%

//overriding card sass from bulma because I use blobs as images
.card
  background-color: rgba(0,0,0,0)
  box-shadow: 0 0 0
</style>