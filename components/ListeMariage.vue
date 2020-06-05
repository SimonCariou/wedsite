 <template>
  <section id="listeDeMariage" class="hero is-fullheight-with-navbar">
    <div class="hero-head">
      <h1 class="title is-4">LISTE DE MARIAGE</h1>
      <h2 class="subtitle">Explications</h2>
    </div>
    <div class="hero-body columns is-multiline is-centered">
      <div class="column is-two-fifths-desktop is-full-mobile">
        <div class="snapscroll-parent">
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="@/components/images/liste_de_mariage/hawaii.jpg" alt="Hawaii" />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">Voyage de noce a Hawaii !!</div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="@/components/images/liste_de_mariage/batterie-cuisine-professionnelle.jpg"
                  alt="Batterie cuisine"
                />
              </figure>
            </div>
            <div class="card-content">
              <div
                class="content"
              >Batterie de cuisine professionnelle, pour emmener nos gateaux au next level.</div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">Item numero 1</div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">Item numero 1</div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">Item numero 1</div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">Item numero 1</div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">Item numero 1</div>
            </div>
          </div>
          <div class="card snapscroll-child">
            <div class="card-image">
              <figure class="image is-3by2">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">Item numero 1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <div class="columns is-mobile is-centered">
        <div
          class="column is-one-quarter-desktop is-one-quarter-tablet is-three-quarters-mobile"
          style="z-index:1"
        >
          <Paypal />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Paypal from "~/components/Paypal.vue";
export default {
  components: {
    Paypal
  }
};
</script>

<style scoped>
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

.snapscroll-child:nth-child(3) {
  flex: 0 0 85%;
}

.snapscroll-child:nth-child(4) {
  flex: 0 0 85%;
}

.snapscroll-child:nth-child(5) {
  flex: 0 0 85%;
}

.snapscroll-child:nth-child(6) {
  flex: 0 0 85%;
}
.snapscroll-child:nth-child(7) {
  flex: 0 0 85%;
}
.snapscroll-child:nth-child(8) {
  flex: 0 0 85%;
}
</style>

