<template>
  <section id="informations" class="hero is-fullheight-with-navbar">
    <div class="hero-head">
      <h1 class="title is-4">INFORMATIONS</h1>
      <h2 class="subtitle">Tout ce que vous avez besoin de savoir sur le lieu</h2>
    </div>

    <div class="columns hero-body">
      <div class="column has-text-left">
        <div class="columns is-multiline is-centered is-mobile">
          <div class="hidden-on-mobile displayed-on-tablet-desktop">
            <div class="column is-half-desktop is-half-tablet is-full-mobile">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <p>
                      <strong>ADRESSE</strong>
                      <br />78710 Jouy-Mauvoisin dans les Yvelines
                    </p>
                    <p>Petit village Francais privatise avec ses commerces et son lavoir</p>
                  </div>
                </div>
                <div class="card-image">
                  <figure class="image is-16by9">
                    <img src="@/components/images/sully.jpg" alt="Sully" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column is-half-desktop is-half-tablet is-full-mobile">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <p>
                      <strong>COMMENT S'Y RENDRE</strong>
                      <br />
                    </p>
                  </div>
                </div>
                <div class="card-image">
                  <figure class="image is-4by3">
                    <iframe
                      class="has-ratio"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.607569389974!2d1.6524822155735763!3d48.97999420009076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6b9b378c1c355%3A0x56036d031fc3031e!2sLE%20VILLAGE%20DE%20SULLY!5e0!3m2!1sen!2sfr!4v1590081892934!5m2!1sen!2sfr"
                      width="100%"
                      height="400px"
                      frameborder="0"
                      style="border:0;"
                      allowfullscreen
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="displayed-on-mobile hidden-on-tablet-desktop is-mobile">
          <div class="column is-half-desktop is-full-mobile">
            <div class="snapscroll-parent displayed-on-mobile">
              <div class="card snapscroll-child">
                <div class="card-image">
                  <figure class="image is-16by9">
                    <img src="@/components/images/sully.jpg" alt="Sully" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <p>
                      <strong>ADRESSE</strong>
                      <br />78710 Jouy-Mauvoisin dans les Yvelines
                    </p>
                    <p>Petit village Francais privatise avec ses commerces et son lavoir</p>
                  </div>
                </div>
              </div>
              <div class="card snapscroll-child">
                <div class="card-content">
                  <div class="content">
                    <p>
                      <strong>COMMENT S'Y RENDRE</strong>
                      <br />
                    </p>
                  </div>
                </div>
                <div class="card-image">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.607569389974!2d1.6524822155735763!3d48.97999420009076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6b9b378c1c355%3A0x56036d031fc3031e!2sLE%20VILLAGE%20DE%20SULLY!5e0!3m2!1sen!2sfr!4v1590081892934!5m2!1sen!2sfr"
                    width="100%"
                    height="300px"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="sass">
@media screen and (max-width: 768px)
  .displayed-on-mobile
    display: flex

  .hidden-on-mobile
    display: none

@media screen and (min-width: 769px)
  .displayed-on-tablet-desktop
    display: flex

  .hidden-on-tablet-desktop
    display: none

.snapscroll-parent
  display: flex
  width: 100%
  height: 100%
  margin: 0 auto
  overflow-x: scroll
  -webkit-overflow-scrolling: touch
  scroll-snap-type: x mandatory

.snapscroll-child
  position: relative
  margin: 0.5rem
  scroll-snap-align: center

  &:nth-child(1)
    flex: 0 0 85%

  &:nth-child(2)
    flex: 0 0 85%
</style>