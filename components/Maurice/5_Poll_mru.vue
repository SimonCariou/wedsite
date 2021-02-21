<template>
  <section class="hero is-fullheight-with-navbar is-info" id="poll">
    <div class="hero-head has-text-centered observedElement section-title">
      <div class="container">
        <h1 class="title is-size-2-mobile is-size-1-tablet is-uppercase">
          {{ $t("pages.mauritius.poll.title") }}
        </h1>
        <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
          {{ $t("pages.mauritius.poll.subtitle") }}
        </h2>
      </div>
    </div>
    <div class="hero-body observedElement section-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5">
            <form v-on:submit.prevent="add">
              <label class="label has-text-success">RSVP</label>
              <div class="field is-grouped">
                <p class="control is-expanded">
                  <input
                    class="input is-success"
                    type="text"
                    placeholder="Nom/Prénom"
                    v-model="text.text"
                  />
                </p>
                <p class="control">
                  <button type="submit" class="button is-success">
                    Envoyer
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from "~/plugins/firebase.js";

let namesRef = db.ref("names");

export default {
  name: "app",
  firebase: { texts: namesRef },
  data() {
    return {
      text: {
        text: "",
      },
    };
  },
  methods: {
    add() {
      namesRef.push(this.text);
      this.text.text = "";
    },
  },
};
</script>