<template>
  <section id="photos" class="hero is-fullheight-with-navbar is-success is-bold">
    <div class="hero-head">
      <h1 class="title">PHOTOS</h1>
      <h2 class="subtitle">Explications</h2>
    </div>
    <div class="hero-body columns is-multiline">
      <div class="column">
        <div class="columns is-centered">
          <div class="column is-half-desktop is-full-mobile">
            <div class="card">
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
                  <br />
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </div>
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
  padding: 1rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  background-color: rgb(0, 0, 0);
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
}

.snapscroll-child img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.snapscroll-child {
  position: relative;
  margin: 0.5rem;
  border-radius: 10px;
  scroll-snap-align: center;
}

p {
  max-width: 60%;
  line-height: 1.25rem;
  padding-left: 1rem;
  border-left: 2px solid rgba(255, 255, 255, 0.25);
}

.snapscroll-child .caption {
  position: absolute;
  bottom: 0;
  padding: 1rem;
  height: 30%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
}

.snapscroll-child:nth-child(1) {
  flex: 0 0 90%;
}

.snapscroll-child:nth-child(2) {
  flex: 0 0 90%;
}

.snapscroll-child:nth-child(3) {
  flex: 0 0 90%;
}

.snapscroll-child:nth-child(4) {
  flex: 0 0 90%;
}

.snapscroll-child:nth-child(5) {
  flex: 0 0 90%;
}

.snapscroll-child:nth-child(6) {
  flex: 0 0 90%;
}
.snapscroll-child:nth-child(7) {
  flex: 0 0 90%;
}
.snapscroll-child:nth-child(8) {
  flex: 0 0 90%;
}
</style>

