<template>
  <div class="container-fluid">
    <section class="row justify-content-center my-2">
      <div class="col-md-10">
        <span v-for="w in word" :id="w" class="color">{{ w }}</span>
      </div>
    </section>
    <section class="row">
      <div class="col-md-10">
        <p>Portfolio</p>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';

export default {
  setup() {
    let red = "#7165b5"
    let word = AppState.word
    function flow() {
      word.forEach((letter, i) => {
        setTimeout(() => {
          let lett = document.getElementById(letter)
          lett.style.color = red;
          lett.style.fontSize = 30 + "px"
          logger.log(letter);
        }, i * 180);
      });
    }
    onMounted(() => flow())

    return {
      word,
      red,
    }
  }
}
</script>

<style scoped lang="scss">
.red {
  color: red;
}

.color {
  transition: all .2s ease;
}

.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
