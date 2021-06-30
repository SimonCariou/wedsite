<template>
    <section>
        <div class="modal" ref="modal_vaccine">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">Vaccin Obligatoire pour rentrer sur le territoire !</div>
            </div>
            <button class="modal-close is-large" aria-label="close" ref="close_modal_button" @click="close_modal"></button>
        </div>
    </section>
</template>

<script >
export default {
  name: "VaccineModal",
  methods: {
    close_modal() {
        this.$refs["modal_vaccine"].classList.toggle("is-active");
    }
  },
  mounted() {
      if (!window.localStorage.popupFlag) {
            this.$refs["modal_vaccine"].classList.toggle("is-active");
            window.localStorage.popupFlag = true;
            }
      
  },
};
</script>

<style scoped lang="sass">

</style>

