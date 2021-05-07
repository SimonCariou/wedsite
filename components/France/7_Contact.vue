<template>
  <section id="contact" class="hero is-fullheight">
    <div class="hero-head observedElement section-title">
      <div>
        <div class="wrap-design stuck-left in-background">
          <img
            :data-src="
              require('~/assets/images/global_design/boules_or_tilted.png')
            "
            alt="boules or"
            class="boules-or-info-top-left lazyload"
          />
        </div>
      </div>
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet">
          {{ $t("pages.france.contact.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.france.contact.subtitle") }}
        </h2>
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
            <label class="label">{{
              $t("pages.france.contact.form.name_surname_label")
            }}</label>
            <p class="control has-icons-left">
              <input
                class="is-fullwidth input"
                type="text"
                placeholder="Nom"
                name="name"
                required
              />
              <span class="icon is-small is-left">
                <figure class="image is-16x16">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="rgba(100,100,100,0.8)"
                      d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"
                    ></path>
                  </svg>
                </figure>
              </span>
            </p>
          </div>

          <div class="field">
            <label class="label">{{
              $t("pages.france.contact.form.email_label")
            }}</label>
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="email"
                placeholder="email"
                name="email"
                required
              />
              <span class="icon is-small is-left">
                <figure>
                  <svg class="image is-16x16" viewBox="0 0 24 24">
                    <path
                      fill="rgba(100,100,100,0.8)"
                      d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z"
                    ></path>
                  </svg>
                </figure>
              </span>
            </p>
          </div>

          <div class="field">
            <label class="label">{{
              $t("pages.france.contact.form.message.label")
            }}</label>
            <div class="control">
              <textarea
                class="textarea"
                :placeholder="
                  $t('pages.france.contact.form.message.placeholder')
                "
                name="message"
                required
              ></textarea>
            </div>
          </div>

          <div>
            <input
              id="idBtnSubmit"
              type="submit"
              class="button is-primary"
              :value="$t('pages.france.contact.form.send')"
            />
          </div>
          <progress
            id="idProgressBarMail"
            class="progress is-small is-primary"
            max="100"
            style="display: none"
          >
            15%
          </progress>
          <div id="thankyou_message" style="display: none">
            <h2>
              <strong>{{
                $t("pages.france.contact.form.response.success.thanks")
              }}</strong>
              {{ $t("pages.france.contact.form.response.success.sentence") }}
            </h2>
          </div>
          <div id="error_message" style="display: none">
            <h2>
              <strong>{{
                $t("pages.france.contact.form.response.failure.oupsie")
              }}</strong>
              {{ $t("pages.france.contact.form.response.failure.sentence") }}
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
