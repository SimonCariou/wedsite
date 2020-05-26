<template>
  <section id="contact" class="hero is-fullheight-with-navbar">
    <div class="hero-body columns is-multiline">
      <div class="column is-full">
        <h1 class="title">Contact</h1>
        <h2 class="subtitle">Explications</h2>
      </div>
      <div class="column is-full">
        <form
          class="gform"
          method="POST"
          data-email="yo@yo.yo"
          action="https://script.google.com/macros/s/AKfycbyIbxGfvt7LvtEtgy96hA6JV7mjIJoGbl319h3srvqcUs1dPEvq/exec"
        >
          <div class="field">
            <label class="label">Nom/Prenom</label>
            <div class="control">
              <input class="input" type="text" placeholder="Nom" name="name" />
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
            <input type="submit" value="Envoyer" class="button is-primary" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>