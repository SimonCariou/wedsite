<template>
  <section id="news" class="hero is-fullheight is-light">
    <div class="hero-head observedElement section-title">
      <div class="wrap-design stuck-right in-background">
        <img
          :data-src="
            require('~/assets/images/global_design/boules_or_tilted.png')
          "
          alt="boules or"
          class="boules-or-info-top-right lazyload"
        />
      </div>
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          {{ $t("pages.france.news.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.france.news.subtitle") }}
        </h2>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="explications observedElement section-body">
          <p>
            <span
              class="is-size-3 has-text-weight-semibold highlight has-text-primary"
              >{{ $t("pages.france.news.contents.feb.date") }}</span
            >
          </p>
          <div class="content">
            <ul>
              <li>{{ $t("pages.france.news.contents.feb.li1") }}</li>

              <li>
                {{ $t("pages.france.news.contents.feb.li2") }}
                <img
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/construction_1f6a7.png"
                  alt="construction"
                  style="height: 16px; width: auto"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="sass">
div.old
  & > *
    opacity: 0.2
.content
  figure
    margin-left: 0
</style>