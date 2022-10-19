<script>
import Modal from "../components/Modal.vue";

export default {
components: {
    Modal,
},

props: {
    name: String,
    tiposAnalisis: {
        type: Array,
        default: ()=> [
            "img",
            "title",
            "descrip",
        ],
    },
},
}
</script>

<template>
  <div 
  class="cardContainerAnalisis"
  v-for="tipoAnalisiss in tiposAnalisis"
  :key="tipoAnalisiss.title">
        <div class="cardContainerAnalisis__line"></div>
        <img src="{{analisiss.img}}" >
        <div class="cardContainerAnalisis__title">
          <h2>{{tipoAnalisiss.title}}</h2>
          <p>{{tipoAnalisiss.descrip}}</p>
        </div>
      </div>
</template>

<style lang="scss">
@import "src/assets/main.scss";

.cardContainerAnalisis {
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 300px;
      height: 250px;
      background-color: $White;
      border-radius: 0px 0px 20px 20px;
      box-shadow: $Shadow;
      padding: 20px;
      position: relative;
      margin-top:20px;

      &__line {
        width: 100%;
        height: 5px;
        background-color: $Orange;
        position: absolute;
        top:0;
        left: 0;
      }

      img {
        position: absolute;
        width: 100px;
        top:25px;
        left:100px;
      }   
      
      &__title {
        text-align: center;
        h2 {
          font-size: $SubtitleSize;
          color: $ThirdViolet;
          margin-bottom: 10px;
        }
      }
    }

</style>