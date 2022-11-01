<template>
  <section>
    <div class="header__title">
      <img src="../../public/imgs/results.png" />
      <h2 class="titlesStyle --pink">Interpretación de resultados</h2>
    </div>
  </section>
</template>


<script>
</script>


<style lang="scss" scoped>
@import "src/assets/main.scss";

section {
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  padding: 30px;
  color: $MainColorBlue;

  .header__title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin: 50px 0px 10px 0px;

    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>