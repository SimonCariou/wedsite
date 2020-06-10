<template>
  <section id="hebergements" class="hero is-fullheight-with-navbar">
    <div class="hero-head">
      <h1 class="title is-4">HEBERGEMENTS</h1>
      <h2 class="subtitle">Liste des endroits ou dormir dans le coin.</h2>
    </div>
    <div class="columns hero-body">
      <div class="column has-text-left">
        <div class="columns is-multiline is-centered is-mobile">
          <!--DESKTOP-->

          <div
            class="column is-two-fifths-desktop is-half-tablet is-full-mobile is-hidden-mobile is-flex-desktop is-flex-tablet"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://cdn.kactus.com/pictures/000/163/601/large/le_village_de_sully_chambre.jpg?1574676985"
                    alt="Sully"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p>
                    <strong>Village de Sully</strong>
                    <br />
                    <em>D110 78710 Jouy-Mauvoisin</em>
                    <br />

                    <span>50 couchages</span>
                    <br />
                    <em>58e par personne, salle de bain et toilettes sur le palier</em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="column is-two-fifths-desktop is-half-tablet is-full-mobile is-hidden-mobile is-flex-desktop is-flex-tablet"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://cdn.kactus.com/pictures/000/163/601/large/le_village_de_sully_chambre.jpg?1574676985"
                    alt="Sully"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p>
                    <strong>Domaine de l'oree du bois</strong>
                    <br />
                    <em>Chemin de la Cote Blanche 78710 Rosny-sur-Seine</em>
                    <br />

                    <span>50 couchages</span>
                    <br />
                    <em>68e par personne, salle de bain et toilettes prives.</em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!--ONLY DISPLAYED ON MOBILE-->

          <div
            class="column is-half-desktop is-full-mobile is-flex-mobile is-hidden-desktop is-hidden-tablet"
          >
            <div class="snapscroll-parent">
              <div class="card snapscroll-child">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="https://cdn.kactus.com/pictures/000/163/601/large/le_village_de_sully_chambre.jpg?1574676985"
                      alt="Sully"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <p>
                      <strong>Village de Sully</strong>
                      <br />
                      <em>D110 78710 Jouy-Mauvoisin</em>
                      <br />

                      <span>50 couchages</span>
                      <br />
                      <em>58e par personne, salle de bain et toilettes sur le palier</em>
                    </p>
                  </div>
                </div>
              </div>
              <div class="card snapscroll-child">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="https://cdn.kactus.com/pictures/000/163/601/large/le_village_de_sully_chambre.jpg?1574676985"
                      alt="Sully"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <p>
                      <strong>Domaine de l'oree du bois</strong>
                      <br />
                      <em>Chemin de la Cote Blanche 78710 Rosny-sur-Seine</em>
                      <br />

                      <span>50 couchages</span>
                      <br />
                      <em>68e par personne, salle de bain et toilettes prives.</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- /MOBILE-->
        </div>
        <!-- /DESKTOP-->
      </div>
    </div>
  </section>
</template>


<style scoped lang="sass">
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
.card
  width: 100%
  display: flex
  flex-direction: column
</style>