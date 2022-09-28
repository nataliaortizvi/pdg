<script>
//js

export default {
  props: {
    name: String,
    papers: {
      type: Array,
      default: () => ["title", "author", "about", "year"],
    },
  },
};
</script>
            
              
<template>
  <section class="cardContainer" v-for="paper in papers" :key="paper.title">
    <h2 class="titleTxt">{{ paper.title }}</h2>
    <p class="authorTxt">{{ paper.author }}</p>
    <p class="aboutTxt">{{ paper.about }}</p>
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
  margin: 30px 40px;
  display: flex;
  flex-direction: column;
}
</style>