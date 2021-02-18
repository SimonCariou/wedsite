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
            <!-- <figure class="image is-3by2">
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
            </figure> -->
            <div class="floating-image">
              <svg
                viewBox="0 0 20 18"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
              >
                <clipPath id="mask">
                  <path
                    d="M2.217 0c2.348 0 4.661 2.723 8.25 4.484 3.69 1.81 9.375.438 9.375 2.641 0 4.346-4.614 10.125-9.375 10.125-2.52 0-2.54-2.489-4.118-4.066-1.401-1.4-4.507-1.764-4.507-3.809C1.842 5.029-2.543 0 2.217 0z"
                  />
                </clipPath>
                <image
                  width="100%"
                  height="100%"
                  clip-path="url(#mask)"
                  preserveAspectRatio="xMidYMid slice"
                  href="https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/e35/21042582_197917604079859_6795856486795837440_n.jpg?_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Ni3E0yvyZEsAX9kL4Ug&tp=1&oh=a3740699cdc6f328599dd72353a5f1ca&oe=6054DBDE"
                />
              </svg>
            </div>
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
.floating-image
  svg
    width: 80%
    position: relative
    left: 50%
    bottom: 0
    transform: translate(-50%,0%)
</style>