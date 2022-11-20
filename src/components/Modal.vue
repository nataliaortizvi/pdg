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
  <div class="backdrop" @click.self="closeModal">
    <section class="modalContainer">
      <div class="modalInfo">
        <slot></slot>
      </div>
      <img src="/imgs/exitBtn.png" @click="closeModal" v-if="showButton" />
      <!--<img class="scrolldown" src="../../public/icons/scrolldown.svg" alt="">-->
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
  backdrop-filter: blur(8px);
  z-index: 100;
  overflow-y: unset;
}

.modalContainer {
  border-radius: 20px;
  background: $White;
  width: fit-content;
  height: fit-content;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;

  .modalInfo {
    max-height: 90vh;
    max-width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: scroll;
    margin: 10px;
  }

  img {
    position: absolute;
    width: 50px;
    height: 50px;
    top: -15px;
    right: -15px;
    cursor: pointer;
    transition: 0.2s linear;

    &:hover {
      transform: scale(1.08);
    }
  }

  /*.scrolldown {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }*/
}
</style>