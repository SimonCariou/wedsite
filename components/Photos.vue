<template>
  <section id="photos" class="hero is-fullheight-with-navbar is-success is-bold">
    <div class="hero-head">
      <h1 class="title">PHOTOS</h1>
      <h2 class="subtitle">Explications</h2>
    </div>
    <div class="hero-body columns is-multiline is-centered">
      <div class="column is-half-desktop is-full-mobile">
        <div class="snapscroll-parent">
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2013-1-1">1 Jan 2013</time>
                <br />Premiere annee en couple
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2013-1-1">1 Jan 2013</time>
                <br />Soiree en couple blabla
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2013-1-1">1 Jan 2013</time>
                <br />Vacances moris
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2013-1-1">1 Jan 2013</time>
                <br />Londres
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2013-1-1">1 Jan 2013</time>
                <br />Avec le poto Nuggets
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2013-1-1">1 Jan 2013</time>
                <br />Vacances la bas.
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2013-1-1">1 Jan 2013</time>
                <br />Anne pre confinement
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2013-1-1">1 Jan 2013</time>
                <br />Fiancailles aight
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.snapscroll-parent {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
}

.snapscroll-child {
  position: relative;
  margin: 0.5rem;
  scroll-snap-align: center;
}

.snapscroll-child:nth-child(1) {
  flex: 0 0 85%;
}

.snapscroll-child:nth-child(2) {
  flex: 0 0 85%;
}

.snapscroll-child:nth-child(3) {
  flex: 0 0 85%;
}

.snapscroll-child:nth-child(4) {
  flex: 0 0 85%;
}

.snapscroll-child:nth-child(5) {
  flex: 0 0 85%;
}

.snapscroll-child:nth-child(6) {
  flex: 0 0 85%;
}
.snapscroll-child:nth-child(7) {
  flex: 0 0 85%;
}
.snapscroll-child:nth-child(8) {
  flex: 0 0 85%;
}
</style>

