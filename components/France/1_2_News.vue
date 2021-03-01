<template>
  <section id="news" class="hero is-fullheight">
    <div class="hero-head observedElement section-title">
      <div class="wrap-design stuck-right in-background">
        <img
          :data-src="
            require('~/assets/images/global_design/boules_or_tilted.png')
          "
          alt="boules or"
          class="boules-or-info-top-right lazyload"
        />
      </div>
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          {{ $t("pages.france.news.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.france.news.subtitle") }}
        </h2>
      </div>
    </div>
    <div class="hero-body observedElement section-body">
      <div class="container">
        <!-- <div class="explications">
          <p>
            <span
              class="is-size-3 has-text-weight-semibold highlight has-text-primary"
              >15 Octobre</span
            >
          </p>
          <div class="content">
            <ul>
              <li>
                LES FAIRE-PART ONT ÉTÉ ENVOYÉ! 🎉🎉🎉 ➡️ RSVP avant le
                <em>31 Octobre.</em>
              </li>

              <li>
                Déroulement de la journée fixé ! Voir le
                <em>
                  <a href="#deroulement">déroulement</a>
                </em>
              </li>
            </ul>
            <strong class="has-text-primary">Parenthèse Covid:</strong>
            <ul>
              <li>
                Comme dit dans notre mail, si nous jugeons que le risque est
                trop grand ou que nous n'avons tout simplement pas le droit
                d'organiser de tels évènements, le mariage sera malheureusement
                décalé.
              </li>
              <li>
                Sachez que nous ne souhaitons mettre personne en danger, ni
                aller contre les lois et recommandations gouvernementales et
                nous aimerions que vous soyez tous auprès de nous. Si nous
                devons décaler pour la santé de tous, nous le ferons 1 mois à
                l'avance.
              </li>
              <li>
                <figure class="image is-16x16">
                  <img
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/hand-with-index-and-middle-fingers-crossed_1f91e.png"
                    alt="fingers crossed"
                  />
                </figure>
              </li>
            </ul>
          </div>
        </div> -->
        <!-- <div class="explications old">
          <p>
            <span
              class="is-size-3 has-text-weight-semibold highlight has-text-primary"
              >14 Septembre</span
            >
          </p>
          <div class="content">
            <ul>
              <li>
                A cause du Covid nous ne pouvons être que 30 personnes maximum
                dans la mairie... Nous vous donnons donc
                <strong class="has-text-primary"
                  >rendez-vous au Village de Sully à 16h</strong
                >
                pour une séance photo (pour profiter des derniers rayons du
                soleil) et une
                <strong class="has-text-primary">Cérémonie Laïque</strong> avant
                de commencer le cocktail.
              </li>
              <li>
                Des
                <em>
                  <a href="#hebergements">hébergements</a>
                </em>
                sont disponibles à partir de 3.5km du lieu du mariage.
              </li>
              <li>
                Les Uber commencent à moins de 10 euros par voiture entre le
                Village de Sully et les différents lieux de couchages dans les
                environs.
              </li>
              <li>
                Un service de covoit' navette (entre nous) pourra éventuellement
                se mettre en place le lendemain pour récupérer les voitures de
                ceux qui les auraient laissées sur place.
              </li>
              <li>
                🔜 Le plan du déroulement de l'après-midi
                <strong class="has-text-primary">et les faire-part</strong>
                arrivent vite !
              </li>
            </ul>
          </div>
        </div> -->
        <div class="explications">
          <p>
            <span
              class="is-size-3 has-text-weight-semibold highlight has-text-primary"
              >{{ $t("pages.france.news.contents.feb.date") }}</span
            >
          </p>
          <div class="content">
            <ul>
              <li>{{ $t("pages.france.news.contents.feb.li1") }}</li>

              <li>
                {{ $t("pages.france.news.contents.feb.li2") }}
                <img
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/construction_1f6a7.png"
                  alt="construction"
                  style="height: 16px; width: auto"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="sass">
div.old
  & > *
    opacity: 0.2
.content
  figure
    margin-left: 0
</style>