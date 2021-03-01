<template>
  <section class="hero is-info" id="what_to_do">
    <!-- <section class="hero is-info"> -->
    <!-- <div style="height: 100px; overflow: hidden">
      <svg
        viewBox="0 0 1440 121"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="-webkit-transform: scale(1); transform: scale(1)"
      >
        <path
          fill="#faf0d7"
          d="M 0 79 C 365.5 79 365.5 110 731 110 L 731 110 L 731 0 L 0 0 Z"
          stroke-width="0"
        ></path>
        <path
          fill="#faf0d7"
          d="M 730 110 C 1085 110 1085 43 1440 43 L 1440 43 L 1440 0 L 730 0 Z"
          stroke-width="0"
        ></path>
      </svg>
    </div> -->
    <div style="height: 80px; overflow: hidden">
      <svg
        viewBox="0 0 500 80"
        preserveAspectRatio="none"
        style="
          height: 100%;
          width: 100%;
          -webkit-transform: scale(1);
          transform: scale(1);
        "
      >
        <path
          d="M-1.69,26.14 C265.79,93.25 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          fill="rgba(250, 240, 215, 1)"
        ></path>
      </svg>
    </div>
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
        <div class="columns is-centered">
          <div class="column is-8-tablet is-full-mobile">
            <div
              class="box explications has-text-centered observedElement section-body"
            >
              <p class="block">
                {{ $t("pages.mauritius.what_to_do.introduction") }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="columns is-mobile is-multiline is-variable is-6-tablet is-3-mobile is-centered is-vcentered"
        >
          <div
            class="column is-4-tablet is-half-mobile observedElement section-body"
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
    <!-- <div style="height: 150px; overflow: hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-1.12,78.45 C245.48,155.42 344.80,32.06 502.25,89.30 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #ff3b4b"
        ></path>
      </svg>
    </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: require("@/assets/images/maurice/places/grand_bassin.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.grand_bassin"),
          path:
            "M41.9,-47.8C55.8,-38.2,69.7,-26.5,76,-10.5C82.3,5.5,80.9,25.7,71.2,39.8C61.5,53.9,43.5,61.9,24.8,69.1C6.1,76.4,-13.2,82.8,-31.7,79.4C-50.1,76,-67.7,62.6,-78.1,44.9C-88.4,27.3,-91.5,5.3,-85.2,-12.4C-78.9,-30,-63.3,-43.4,-47.5,-52.6C-31.7,-61.8,-15.9,-66.9,-0.9,-65.7C14,-64.6,28,-57.3,41.9,-47.8Z",
          mask_name: "mask-blob1",
          mask_url: 'url("#mask-blob1")',
        },
        {
          image: require("@/assets/images/maurice/places/le_morne.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.le_morne"),
          path:
            "M35.2,-51.5C45.8,-40.7,54.8,-30.7,64.3,-17.2C73.8,-3.6,83.8,13.4,81.1,27.8C78.4,42.2,63.1,53.9,47.4,60.1C31.8,66.3,15.9,67,-0.2,67.3C-16.3,67.6,-32.6,67.5,-47.5,61C-62.3,54.5,-75.6,41.7,-81,26.1C-86.3,10.5,-83.6,-7.9,-76.4,-23.2C-69.2,-38.6,-57.6,-50.9,-44.1,-60.8C-30.6,-70.6,-15.3,-78,-1.5,-75.9C12.3,-73.8,24.6,-62.3,35.2,-51.5Z",
          mask_name: "mask-blob2",
          mask_url: 'url("#mask-blob2")',
        },
        {
          image: require("@/assets/images/maurice/places/rhumerie_chamarel.jpg"),
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
            "M52,-72.6C65.6,-61.7,73.5,-44.1,77.2,-26.5C80.9,-9,80.3,8.5,75.8,25.3C71.3,42.2,62.8,58.5,49.5,68.3C36.2,78.2,18.1,81.6,-0.6,82.4C-19.2,83.2,-38.5,81.3,-52.3,71.6C-66.1,61.9,-74.6,44.5,-73.4,28.5C-72.2,12.5,-61.3,-2,-53.7,-14.9C-46,-27.9,-41.4,-39.3,-33,-51.9C-24.6,-64.5,-12.3,-78.3,3.5,-83C19.2,-87.8,38.4,-83.6,52,-72.6Z",
          mask_name: "mask-blob4",
          mask_url: 'url("#mask-blob4")',
        },
        {
          image: require("@/assets/images/maurice/places/chamarel_7_colors.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards._7_couleurs"),
          path:
            "M53.2,-69.3C67.8,-62.6,77.7,-45.5,82.7,-27.5C87.8,-9.4,88.1,9.6,81.8,25.8C75.5,42.1,62.7,55.4,48,62C33.3,68.6,16.7,68.5,0.4,68C-16,67.5,-31.9,66.7,-45,59.6C-58.1,52.4,-68.4,39,-69.3,25.2C-70.2,11.3,-61.6,-3,-55.9,-17.5C-50.2,-31.9,-47.4,-46.7,-38.6,-55.2C-29.7,-63.8,-14.9,-66.2,2.2,-69.3C19.3,-72.3,38.6,-76,53.2,-69.3Z",
          mask_name: "mask-blob5",
          mask_url: 'url("#mask-blob5")',
        },
        {
          image: require("@/assets/images/maurice/places/port_louis.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.port_louis"),
          path:
            "M50.5,-71C63.7,-60,71.2,-42.8,77.3,-24.9C83.4,-7,88,11.5,82.2,25.9C76.5,40.4,60.4,50.6,44.9,57.9C29.5,65.2,14.7,69.6,-1.5,71.6C-17.7,73.6,-35.4,73.3,-44,63.8C-52.7,54.3,-52.3,35.6,-52.8,20.4C-53.2,5.2,-54.5,-6.4,-54.8,-21.6C-55.1,-36.8,-54.5,-55.5,-45.2,-67.7C-36,-80,-18,-85.7,0.4,-86.2C18.7,-86.7,37.4,-81.9,50.5,-71Z",
          mask_name: "mask-blob6",
          mask_url: 'url("#mask-blob6")',
        },
        {
          image: require("@/assets/images/maurice/places/casela.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.casela"),
          path:
            "M50.5,-67.8C63.2,-60.4,69.5,-42.5,72.5,-25.4C75.5,-8.3,75.2,8,70.4,22.9C65.6,37.8,56.3,51.2,43.8,61C31.3,70.8,15.7,77,-1.4,78.9C-18.5,80.9,-37,78.6,-52.2,69.7C-67.4,60.8,-79.2,45.2,-82.6,28.4C-86,11.5,-80.9,-6.5,-72.2,-20.5C-63.6,-34.4,-51.4,-44.2,-38.8,-51.6C-26.2,-59,-13.1,-64,2.9,-68.1C19,-72.1,37.9,-75.2,50.5,-67.8Z",
          mask_name: "mask-blob7",
          mask_url: 'url("#mask-blob7")',
        },
        {
          image: require("@/assets/images/maurice/places/pieter_both.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.pieter_both"),
          path:
            "M41.9,-47.8C55.8,-38.2,69.7,-26.5,76,-10.5C82.3,5.5,80.9,25.7,71.2,39.8C61.5,53.9,43.5,61.9,24.8,69.1C6.1,76.4,-13.2,82.8,-31.7,79.4C-50.1,76,-67.7,62.6,-78.1,44.9C-88.4,27.3,-91.5,5.3,-85.2,-12.4C-78.9,-30,-63.3,-43.4,-47.5,-52.6C-31.7,-61.8,-15.9,-66.9,-0.9,-65.7C14,-64.6,28,-57.3,41.9,-47.8Z",
          mask_name: "mask-blob8",
          mask_url: 'url("#mask-blob8")',
        },
        {
          image: require("@/assets/images/maurice/places/ile_aux_cerfs.jpg"),
          alternative_description: "",
          title: this.$t("pages.mauritius.what_to_do.cards.ile_aux_cerfs"),
          path:
            "M35.2,-51.5C45.8,-40.7,54.8,-30.7,64.3,-17.2C73.8,-3.6,83.8,13.4,81.1,27.8C78.4,42.2,63.1,53.9,47.4,60.1C31.8,66.3,15.9,67,-0.2,67.3C-16.3,67.6,-32.6,67.5,-47.5,61C-62.3,54.5,-75.6,41.7,-81,26.1C-86.3,10.5,-83.6,-7.9,-76.4,-23.2C-69.2,-38.6,-57.6,-50.9,-44.1,-60.8C-30.6,-70.6,-15.3,-78,-1.5,-75.9C12.3,-73.8,24.6,-62.3,35.2,-51.5Z",
          mask_name: "mask-blob9",
          mask_url: 'url("#mask-blob9")',
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