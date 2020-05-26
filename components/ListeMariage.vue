 <template>
  <section id="listeDeMariage" class="hero is-fullheight-with-navbar is-light is-bold">
    <div class="hero-head">
      <h1 class="title">LISTE DE MARIAGE</h1>
      <h2 class="subtitle">Explications</h2>
    </div>
    <div class="hero-body columns is-multiline">
      <div class="column is-full">
        <div class="columns is-centered">
          <div class="column is-three-quarters">
            <div id="paginated_gallery" class="snapscroll-parent">
              <div class="snapscroll-child">
                <img src="https://via.placeholder.com/640x360" />
                <div class="caption">
                  <h3>Item#1</h3>
                  <p>blablabli blablablo</p>
                </div>
              </div>
              <div class="snapscroll-child">
                <img src="https://via.placeholder.com/640x360" />
                <div class="caption">
                  <h3>Item#2</h3>
                  <p>blablabli blablablo</p>
                </div>
              </div>
              <div class="snapscroll-child">
                <img src="https://via.placeholder.com/640x360" />
                <div class="caption">
                  <h3>Item#3</h3>
                  <p>blablabli blablablo</p>
                </div>
              </div>
              <div class="snapscroll-child">
                <img src="https://via.placeholder.com/640x360" />
                <div class="caption">
                  <h3>Item#4</h3>
                  <p>blablabli blablablo</p>
                </div>
              </div>
              <div class="snapscroll-child">
                <img src="https://via.placeholder.com/640x360" />
                <div class="caption">
                  <h3>Item#5</h3>
                  <p>blablabli blablablo</p>
                </div>
              </div>
              <div class="snapscroll-child">
                <img src="https://via.placeholder.com/640x360" />
                <div class="caption">
                  <h3>Item#6</h3>
                  <p>blablabli blablablo</p>
                </div>
              </div>
              <div class="snapscroll-child">
                <img src="https://via.placeholder.com/640x360" />
                <div class="caption">
                  <h3>Item#7</h3>
                  <p>blablabli blablablo</p>
                </div>
              </div>
              <div class="snapscroll-child">
                <img src="https://via.placeholder.com/640x360" />
                <div class="caption">
                  <h3>Item#8</h3>
                  <p>blablabli blablablo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <div class="columns is-mobile is-centered">
        <div class="column is-one-quarter-desktop is-one-quarter-tablet is-three-quarters-mobile">
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
  padding: 1rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  background-color: rgb(0, 0, 0);
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
}

.snapscroll-child img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.snapscroll-child {
  position: relative;
  margin: 0.5rem;
  border-radius: 10px;
  scroll-snap-align: center;
}

p {
  max-width: 60%;
  line-height: 1.25rem;
  padding-left: 1rem;
  border-left: 2px solid rgba(255, 255, 255, 0.25);
}

.snapscroll-child .caption {
  position: absolute;
  bottom: 0;
  padding: 1rem;
  height: 30%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
}

.snapscroll-child:nth-child(1) {
  flex: 0 0 90%;
}

.snapscroll-child:nth-child(2) {
  flex: 0 0 90%;
}

.snapscroll-child:nth-child(3) {
  flex: 0 0 90%;
}

.snapscroll-child:nth-child(4) {
  flex: 0 0 90%;
}

.snapscroll-child:nth-child(5) {
  flex: 0 0 90%;
}

.snapscroll-child:nth-child(6) {
  flex: 0 0 90%;
}
.snapscroll-child:nth-child(7) {
  flex: 0 0 90%;
}
.snapscroll-child:nth-child(8) {
  flex: 0 0 90%;
}
</style>

