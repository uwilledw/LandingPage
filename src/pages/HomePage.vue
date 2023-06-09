<template>
  <div class="container-fluid">
    <section class="row hero-img">
      <div class="col-12 text-light text-center">
        <h1>Hello, I am William Edwards, a fullstack software developer</h1>
      </div>
    </section>
    <section class="row justify-content-center align-items-center my-2">
      <div class="col-md-10 text-center my-3 title">
        <span v-for="l in abtMe" :id="l" class="color">{{ l }}</span>
      </div>
    </section>
    <section class="row justify-content-around">
      <div class="col-md-5 text-center">
        <img class="my-img"
          src="https://images.unsplash.com/photo-1527100673774-cce25eafaf7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt="">
      </div>
      <div class="col-md-5">
        <p class="fs-5"> I am a motivated fullstack software developer with a passion for crafting efficient and intuitive
          applications. I
          recently completed a rigorous 13-week coding bootcamp, where I gained hands-on experience in modern web
          development technologies such as HTML, CSS, JavaScript, and React.

          Prior to my coding bootcamp,

          As a software developer, I am always open to learning new skills and technologies, and I am excited about the
          opportunity to continue growing professionally. I am seeking an entry-level software developer position where I
          can utilize my skills and knowledge to produce innovative applications in a collaborative and dynamic team
          environment.</p>
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
    let color = null
    function GetColor() {
      let i = Math.floor(Math.random() * AppState.colors.length)
      color = AppState.colors[i]
    }

    let fntSze = null

    function ChangeFont() {
      fntSze = Math.floor(Math.random() * 20) + 55
    }

    let abtMe = AppState.abtMe

    function flow() {
      GetColor()
      ChangeFont()
      abtMe.forEach((letter, i) => {
        setTimeout(() => {
          let lett = document.getElementById(letter)
          lett.style.color = color;
          lett.style.fontSize = fntSze + "px"
          logger.log(letter);
        }, i * 180);
      });
    }
    onMounted(() => setInterval(flow, 5000))

    // const t = setInterval(flow, 5000)

    return {
      abtMe,
      color,
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

.title {
  height: 12vh;
}

.hero-img {
  background-image: url(https://images.unsplash.com/photo-1498898733745-c8c6df58e4ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80);
  height: 50vh;
  background-position: center;
  background-size: cover;
}

.my-img {
  width: 100%;
  height: 55vh;
  object-fit: cover;
  object-position: center;
}
</style>
