<script>
//js
import Modal from "../components/Modal.vue";
import CardPaperBig from "../components/CardPaperBig.vue";


export default {
  components: {
    Modal,
    CardPaperBig,
  },

  data() {
    return {
      showModalResume: false,
      currentResume: {},
    };
  },

  props: {
    papers: Object,
  },

  methods: {
    //modal resume cards
    openModalResume(resumeSelect) {
      this.showModalResume = true;

      this.currentResume = this.papers.filter(
        (paper) => paper.title === resumeSelect
      );
    },

    closeModalResume() {
      this.showModalResume = false;
    },
  },
};
</script>
            
              
<template>
  <Modal
    class="modalResume"
    :showButton="true"
    v-if="this.showModalResume"
    @close="closeModalResume"
  >
    <CardPaperBig 
      :currentResume="this.currentResume[0]" >
    </CardPaperBig>
  </Modal>

  <section
    class="cardContainer"
    v-for="paper in papers"
    :key="paper.title"
    @click="
      () => {
        openModalResume(paper.title);
      }
    "
  >
    <h2 class="titleTxt">{{ paper.title }}</h2>
    <p class="authorTxt">{{ paper.author }}</p>
    <p class="aboutTxt">{{ paper.resumen }}</p>
    <p class="yearTxt">{{ paper.year }}</p>
  </section>
</template>
            
                 
<style lang="scss" scoped>
@import "src/assets/main.scss";

.cardContainer {
  height: 200px;
  background-color: $White;
  border-radius: 20px;
  box-shadow: 0px 5px 10px 1px rgb(216, 216, 216);
  margin: 30px 150px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: $MainColorBlue;
  position: relative;

  transition: 0.2s linear;

  &:hover {
    transform: scale(1.03);
  }

  .titleTxt {
    color: $SecondPink;
    margin-right: 40px;
  }

  .authorTxt {
    color: $Hint;
    margin-bottom: 20px;
  }
  .yearTxt {
    color: $Hint;
    position: absolute;
    right: 30px;
  }
}

.modalResume {
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  bottom: 0px;
  //overflow: scroll;
}
</style>