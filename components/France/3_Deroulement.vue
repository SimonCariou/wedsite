<template>
  <section id="deroulement" class="hero is-fullheight">
    <div class="hero-head observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          {{ $t("pages.france.flow.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.france.flow.subtitle") }}
        </h2>
      </div>
    </div>
    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="explications">
          <p></p>
        </div>
        <!-- <div class="timeline is-centered">
          <header class="timeline-header">
            <span class="tag is-medium is-primary">
              {{ $t("pages.france.flow.timeline.start") }}</span
            >
          </header>
          <div class="timeline-item">
            <div class="timeline-marker is-danger"></div>
            <div class="timeline-content">
              <p class="heading">
                {{ $t("pages.france.flow.timeline.events.first.time") }}
              </p>
              <p>
                <strong>{{
                  $t("pages.france.flow.timeline.events.first.title")
                }}</strong>
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker is-danger"></div>
            <div class="timeline-content">
              <p class="heading">
                {{ $t("pages.france.flow.timeline.events.second.time") }}
              </p>
              <p>
                <strong>{{
                  $t("pages.france.flow.timeline.events.second.title")
                }}</strong>
              </p>
              <p>
                {{ $t("pages.france.flow.timeline.events.second.description") }}
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker is-danger"></div>
            <div class="timeline-content">
              <p class="heading">
                {{ $t("pages.france.flow.timeline.events.third.time") }}
              </p>
              <p>
                <strong>{{
                  $t("pages.france.flow.timeline.events.third.title")
                }}</strong>
              </p>
              <p>
                {{ $t("pages.france.flow.timeline.events.third.description") }}
              </p>
            </div>
          </div>
          <header class="timeline-header">
            <span class="tag is-medium is-primary">
              {{ $t("pages.france.flow.timeline.end") }}</span
            >
          </header>
        </div> -->
        <div
          class="has-text-centered"
          style="transform: rotate(20deg); width: auto"
        >
          <p class="is-size-4-mobile is-size-1-tablet">
            {{ $t("pages.france.flow.wip") }} 😉
          </p>
        </div>
      </div>
      <div>
        <div class="wrap-design stuck-left in-background">
          <img
            :data-src="
              require('~/assets/images/global_design/boules_or_tilted.png')
            "
            alt="boules or"
            class="boules-or-info-bottom-left lazyload"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass" scoped>
.timeline
  margin: auto
</style>