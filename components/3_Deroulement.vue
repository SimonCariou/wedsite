<template>
  <section id="deroulement" class="hero is-fullheight-with-navbar">
    <div class="hero-head">
      <h1 class="title is-size-3-mobile is-size-1-tablet">Déroulement</h1>
      <h2 class="subtitle is-size-5-mobile is-size-4-tablet">Tout ce que vous avez besoin de savoir</h2>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="timeline is-centered">
          <header class="timeline-header">
            <span class="tag is-medium is-primary">Start</span>
          </header>
          <div class="timeline-item">
            <div class="timeline-marker is-primary"></div>
            <div class="timeline-content">
              <p class="heading">January 2016</p>
              <p>Timeline content</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker is-warning is-image is-32x32">
              <img src="https://bulma.io/images/placeholders/32x32.png" />
            </div>
            <div class="timeline-content">
              <p class="heading">February 2016</p>
              <p>Timeline content</p>
            </div>
          </div>
          <header class="timeline-header">
            <span class="tag is-primary">2017</span>
          </header>
          <div class="timeline-item">
            <div class="timeline-marker is-danger is-icon">
              <i class="fa fa-plus"></i>
            </div>
            <div class="timeline-content">
              <p class="heading">March 2017</p>
              <p>Timeline content</p>
            </div>
          </div>
          <header class="timeline-header">
            <span class="tag is-medium is-primary">End</span>
          </header>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass" scoped>
.timeline
  margin: auto
</style>