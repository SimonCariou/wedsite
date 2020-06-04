<template>
  <section id="hebergements" class="hero is-fullheight-with-navbar">
    <div class="hero-head">
      <h1 class="title is-4">HEBERGEMENTS</h1>
      <h2 class="subtitle">Liste des endroits ou dormir dans le coin.</h2>
    </div>
    <div class="columns hero-body">
      <div class="column has-text-left">
        <div class="columns is-multiline is-centered is-mobile">
          <div class="hidden-on-mobile displayed-on-tablet-desktop">
            <div class="column is-half-desktop is-half-tablet is-full-mobile">
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
                      <br />
                      <span>50 couchages</span>
                      <br />
                      <em>58e par personne, salle de bain et toilettes sur le palier</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-half-desktop is-half-tablet is-full-mobile">
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
        </div>
        <div class="displayed-on-mobile hidden-on-tablet-desktop is-mobile">
          <div class="column is-half-desktop is-full-mobile">
            <div class="snapscroll-parent displayed-on-mobile">
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
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
@media screen and (max-width: 768px) {
  .displayed-on-mobile {
    display: flex;
  }

  .hidden-on-mobile {
    display: none;
  }
}

@media screen and (min-width: 769px) {
  .displayed-on-tablet-desktop {
    display: flex;
  }

  .hidden-on-tablet-desktop {
    display: none;
  }
}

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
/*
.snapscroll-child:nth-child(3) {
  flex: 0 0 85%;
}

.snapscroll-child:nth-child(4) {
  flex: 0 0 85%;
}
*/
</style>