<template>
  <section class="hero is-fullheight-with-navbar is-info" id="rsvp">
    <!-- <div style="height: 50px; overflow: hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-2.25,25.16 C285.55,78.45 155.19,-30.09 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style="stroke: none; fill: #faf0d7"
        ></path>
      </svg>
    </div> -->
    <svg
      viewBox="0 0 1440 200"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill="rgba(250, 240, 215, 1)"
        d="M 0 175 C 310.8 175 466.2 128 777 128 L 777 128 L 777 0 L 0 0 Z"
        stroke-width="0"
      ></path>
      <path
        fill="rgba(250, 240, 215, 1)"
        d="M 776 128 C 1041.6 128 1174.4 180 1440 180 L 1440 180 L 1440 0 L 776 0 Z"
        stroke-width="0"
      ></path>
    </svg>
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
          <div class="column is-6-tablet is-12-mobile">
            <form v-on:submit.prevent="add">
              <label class="label has-text-success">{{
                $t("pages.mauritius.poll.form.label")
              }}</label>
              <div class="field is-grouped">
                <p class="control is-expanded">
                  <input
                    class="input is-success"
                    type="text"
                    :placeholder="$t('pages.mauritius.poll.form.placeholder')"
                    v-model="text.text"
                  />
                </p>
                <p class="control">
                  <button type="submit" class="button is-success">
                    {{ $t("pages.mauritius.poll.form.submit") }}
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