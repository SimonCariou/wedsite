<template>
  <section id="contact" class="hero is-fullheight">
    <div class="hero-head observedElement section-title">
            <div>
        <div class="wrap-design stuck-left in-background">
          <img
            src="@/assets/images/global_design/boules_or_tilted.png"
            alt="boules or"
            class="boules-or-info-top-left"
          />
        </div>
      </div>
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">Contact</h1>
        <h2
          class="subtitle is-size-5-mobile is-size-4-tablet"
        >Envoyez nous un message si vous avez des questions.</h2>
      </div>
    </div>
    <div class="hero-body observedElement section-body">
      <div class="container">
        <form
          class="gform"
          method="POST"
          action="https://script.google.com/macros/s/AKfycbyIbxGfvt7LvtEtgy96hA6JV7mjIJoGbl319h3srvqcUs1dPEvq/exec"
        >
          <div class="field">
            <label class="label">Nom/Prenom</label>
            <p class="control has-icons-left">
              <input class="is-fullwidth input" type="text" placeholder="Nom" name="name" required />
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'user']" />
              </span>
            </p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="email" name="email" required />
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </span>
            </p>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Message a nous faire parvenir"
                name="message"
                required
              ></textarea>
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
          <div id="thankyou_message" style="display:none;">
            <h2>
              <strong>Merci</strong> pour ton message nous te répondrons très vite!
              <span>😉</span>
            </h2>
          </div>
          <div id="error_message" style="display:none;">
            <h2>
              <strong>Flûte</strong> Il y a eu une erreur dans l'envoi de ton mail...
              <span>😢</span> Regarde si tu as du réseau et rééssaye!
            </h2>
          </div>
        </form>
      </div>
    </div>
    
  </section>
</template>

<style lang="sass" scoped>
.gform
  width: 100%
  .button
    color: white !important
</style>
