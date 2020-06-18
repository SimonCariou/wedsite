<template>
  <section id="contact" class="hero is-fullheight-with-navbar">
    <div class="hero-head observedElement">
      <h1 class="title is-size-3-mobile is-size-1-tablet">Contact</h1>
      <h2
        class="subtitle is-size-5-mobile is-size-4-tablet"
      >Envoyez nous un mail si vous avez des questions.</h2>
    </div>
    <div class="hero-body observedElement observedSectionBody">
      <form
        class="gform"
        method="POST"
        action="https://script.google.com/macros/s/AKfycbyIbxGfvt7LvtEtgy96hA6JV7mjIJoGbl319h3srvqcUs1dPEvq/exec"
      >
        <div class="field">
          <label class="label">Nom/Prenom</label>
          <div class="control">
            <input class="is-fullwidth input" type="text" placeholder="Nom" name="name" />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="email" name="email" />
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Message a nous faire parvenir" name="message"></textarea>
          </div>
        </div>

        <div>
          <input id="idBtnSubmit" type="submit" value="Envoyer" class="button is-primary" />
        </div>
        <progress
          id="idProgressBarMail"
          class="progress is-small is-primary"
          max="100"
          style="display:none"
        >15%</progress>
        <div class="thankyou_message" style="display:none;">
          <h2>
            <em>Merci</em> pour ton message nous te repondrons tres vite!
            <span class="bd-emoji">😉</span>
          </h2>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.gform
  width: 100%
  .button
    color: white !important
</style>
