<script>
//js

export default {
  props: {
    showButton: Boolean,
  },

  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
        
        
        
<template>
  <div class="backdrop" @click.self="cerrarModal">
    <section class="modalContainer">
      <img src="/imgs/exitBtn.png" @click="closeModal" v-if="showButton"/>
      <slot></slot>
    </section>
  </div>
</template>
        
        
        
    <style lang="scss" scoped>
@import "src/assets/main.scss";

.backdrop {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(24, 29, 61, 0.8);
  backdrop-filter: blur(2px);
  z-index: 100;
}

.modalContainer {
  display: flex;
  width: auto;
  height: auto;
  border-radius: 20px;
  background: $Background;
  position: relative;
  justify-content: center;
  padding: 30px;

  img {
    width: 50px;
    height: 50px;
    position: absolute;
    top: -15px;
    right: -15px;
    cursor: pointer;
  }
}
</style>