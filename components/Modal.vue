<template>
    <section>
        <div class="modal" ref="modal_vaccine">
            <div class="modal-background" @click="close_modal"></div>
            <div class="modal-content">
                <div class="box modal-content-styling">
                    <h1 class="title">Informations pratiques</h1>
                    <ul>
                        <li>🔓 Ouverture des frontières le 1er Octobre sans quarantaine!</li>
                        <li>⚠️Vaccin Obligatoire pour rentrer sur le territoire ! 💉</li>
                    </ul>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="close_modal"></button>
           
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
    //   if (!window.localStorage.popupFlag) {
        if(true){
            this.$refs["modal_vaccine"].classList.toggle("is-active");
            window.localStorage.popupFlag = true;
            }
      
  },
};
</script>

<style scoped lang="sass">
.modal-content-styling
    margin: 0 20px
    border-radius: 2px

.modal-background
    background-image: radial-gradient(circle, rgba(231,207,58,0.3) 0%, rgba(214,117,19,0.3) 34%, rgba(74,130,231,0.3) 99%)
    background-color: rgba(10, 10, 10, 0.7)
</style>

