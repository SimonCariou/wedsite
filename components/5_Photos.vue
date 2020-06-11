<template>
  <section id="photos" class="hero is-fullheight-with-navbar">
    <div class="hero-head">
      <h1 class="title is-size-3-mobile is-size-1-tablet">Photos</h1>
      <h2 class="subtitle is-size-5-mobile is-size-4-tablet">Explications</h2>
    </div>
    <div class="hero-body columns is-multiline is-centered">
      <div class="column is-half-desktop is-full-mobile">
        <div class="snapscroll-parent">
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="@/components/images/scrollsnap_photos/2013.jpg" alt="CDMGE" />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2013-6-1">6 Juin 2013</time>
                <br />Premiere CDMGE pour encourager Roxane aux pompom girls.
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="@/components/images/scrollsnap_photos/2014.png"
                  alt="Match de football americain au Texas"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2014-11-27">27 Novembre 2014</time>
                <br />Visite de Roxane au Texas pour voir un match de football americain universitaire.
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="@/components/images/scrollsnap_photos/2015.png" alt="Soiree EPF" />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2015-4-18">18 Avril 2015</time>
                <br />Soiree Versus EPF - Campagne BDE.
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="@/components/images/scrollsnap_photos/2016.jpg" alt="Tour Eiffel" />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2013-1-1">14 Septembre 2016</time>
                <br />A l'assaut de la tour Eiffel.
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="@/components/images/scrollsnap_photos/2017.jpg"
                  alt="Mariage Pierre-Yves et Elodie"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2013-1-1">13 Mai 2017</time>
                <br />Mariage de Pierre-Yves et Elodie Cariou
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="@/components/images/scrollsnap_photos/2018.jpg" alt="Opera Garnier" />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2018-8-28">28 Aout 2018</time>
                <br />Avec un style fantome pendant l'escape game de l'Opera Garnier
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="@/components/images/scrollsnap_photos/2019.jpg"
                  alt="Paris - Hotel de Ville"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2019-4-20">20 Avril 2019</time>
                <br />Sortie champetre a Paris sur la place de l'hotel de ville.
              </div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="@/components/images/scrollsnap_photos/2020.jpg" alt="Saint Valentin" />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time datetime="2020-2-14">14 Fevrier 2020</time>
                <br />Apero a l'appartement pour la Saint Valentin. Encore jeunes et innoncents, prets a etre confines pendant 3 mois
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

