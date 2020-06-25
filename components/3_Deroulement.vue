<template>
  <section id="deroulement" class="hero is-fullheight-with-navbar is-light">
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style="position: absolute; top: calc(200vh); right:0; width:45%;"
    >
      <path
        fill="#fff"
        d="M67.6,-42.6C78.8,-19.6,73,9.6,58.9,27.1C44.8,44.6,22.4,50.4,-2.2,51.6C-26.8,52.9,-53.5,49.6,-64,34.2C-74.5,18.8,-68.7,-8.7,-55.3,-33C-41.9,-57.3,-20.9,-78.3,3.6,-80.4C28.2,-82.4,56.4,-65.6,67.6,-42.6Z"
        transform="translate(100 100)"
      />
    </svg>
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style="position: absolute; top: calc(230vh);  width:40%;"
    >
      <path
        fill="#fff"
        d="M30.2,-32.3C40.7,-27.2,51.8,-19.2,56.2,-7.9C60.7,3.4,58.5,18,52.5,32.2C46.6,46.4,36.8,60.4,22.4,68.7C8,77.1,-11,79.9,-21,70.6C-31,61.4,-31.9,40.2,-40,24.1C-48.2,8,-63.6,-3,-61.6,-10.2C-59.5,-17.4,-40,-20.9,-26.8,-25.5C-13.6,-30,-6.8,-35.6,1.5,-37.4C9.9,-39.3,19.7,-37.3,30.2,-32.3Z"
        transform="translate(100 100)"
      />
    </svg>
    <div class="hero-head observedElement">
      <h1 class="title is-size-3-mobile is-size-1-tablet">Déroulement</h1>
      <h2 class="subtitle is-size-5-mobile is-size-4-tablet">Tout ce que vous avez besoin de savoir</h2>
    </div>
    <div class="hero-body observedElement">
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