 <template>
  <section id="listeDeMariage" class="hero is-fullheight-with-navbar is-light is-bold">
    <div class="hero-body columns is-multiline">
      <div class="column is-full">
        <h1 class="title">Liste de mariage</h1>
        <h2 class="subtitle">Explications</h2>
      </div>
      <div class="column is-full">
        <div class="columns is-centered">
          <div class="colum is-half">
            <Paypal />
          </div>
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