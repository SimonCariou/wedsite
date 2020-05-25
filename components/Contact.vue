<template>
  <section id="contact" class="hero is-fullheight-with-navbar">
    <div class="hero-body columns is-multiline">
      <div class="column is-full">
        <h1 class="title">Contact</h1>
        <h2 class="subtitle">Explications</h2>
      </div>
      <div class="column is-full">
        <form action="mailto:simon.cariou@epfedu.fr" method="GET" target="_blank">
          <div class="field">
            <label class="label">Nom</label>
            <div class="control">
              <input class="input" type="text" placeholder="Nom" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="email" value />
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Message a nous faire parvenir"></textarea>
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