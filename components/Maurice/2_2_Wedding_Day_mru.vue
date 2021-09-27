<template>
  <section id="wedding_day" class="hero is-info is-fullheight-with-navbar">
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
    <div class="hero-head observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          {{ $t("pages.mauritius.flow.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.mauritius.flow.subtitle") }}
        </h2>
      </div>
    </div>
    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="explications">
          <p></p>
        </div>
        <div class="timeline is-centered">
          <header class="timeline-header">
            <span class="tag is-medium is-primary">
              {{ $t("pages.mauritius.flow.timeline.start") }}</span
            >
          </header>
          <div class="timeline-item">
            <div class="timeline-marker is-danger"></div>
            <div class="timeline-content">
              <p class="heading">
                {{ $t("pages.mauritius.flow.timeline.events.first.time") }}
              </p>
              <p>
                <strong>{{
                  $t("pages.mauritius.flow.timeline.events.first.title")
                }}</strong>
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker is-danger"></div>
            <div class="timeline-content">
              <p class="heading">
                {{ $t("pages.mauritius.flow.timeline.events.second.time") }}
              </p>
              <p>
                <strong>{{
                  $t("pages.mauritius.flow.timeline.events.second.title")
                }}</strong>
              </p>
              <p>
                {{
                  $t("pages.mauritius.flow.timeline.events.second.description")
                }}
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker is-danger"></div>
            <div class="timeline-content">
              <p class="heading">
                {{ $t("pages.mauritius.flow.timeline.events.third.time") }}
              </p>
              <p>
                <strong>{{
                  $t("pages.mauritius.flow.timeline.events.third.title")
                }}</strong>
              </p>
              <p>
                {{
                  $t("pages.mauritius.flow.timeline.events.third.description")
                }}
              </p>
            </div>
          </div>
          <header class="timeline-header">
            <span class="tag is-medium is-primary">
              {{ $t("pages.mauritius.flow.timeline.end") }}</span
            >
          </header>
        </div>
      </div>
    </div>
    <div style="height: 150px; overflow: hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="
          height: 100%;
          width: 100%;
          -webkit-transform: scale(1);
          transform: scale(1);
        "
      >
        <path
          d="M-4.51,110.03 C245.48,155.42 281.59,122.86 501.69,123.84 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #faf0d7"
        ></path>
      </svg>
    </div>
  </section>
</template>
<style lang="sass" scoped>
.timeline
  margin: auto
</style>