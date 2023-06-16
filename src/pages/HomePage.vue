<template>
  <div class="container-fluid">
    <section class="row hero-img justify-content-center align-items-center">
      <div class="col-md-6 text-light text-center">
        <h1>Hello, I am William Edwards, a fullstack software developer</h1>
      </div>
    </section>
    <section class="row justify-content-center align-items-center my-2">
      <div class="col-md-10 text-center my-3 title">
        <span v-for="l in abtMe" :id="l?.id" class="color">{{ l?.letter }}</span>
      </div>
    </section>
    <section class="row justify-content-around">
      <div class="col-md-5 text-center">
        <img class="my-img"
          src="https://images.unsplash.com/photo-1527100673774-cce25eafaf7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt="">
      </div>
      <div class="col-md-5">
        <p class="fs-5 py-3"> I am a motivated fullstack software developer with a passion for crafting efficient and
          intuitive
          applications. I
          recently completed a rigorous 13-week coding bootcamp, where I gained hands-on experience in modern web
          development technologies such as HTML, CSS, JavaScript, Vue and more.

          Prior to my coding bootcamp, I was exploring options for a career and I am glad that I came across coding.

          As a software developer, I am always open to learning new skills and technologies, and I am excited about the
          opportunity to continue growing professionally.
          <!-- I am seeking an entry-level software developer position where I
          can utilize my skills and knowledge to produce innovative applications in a collaborative and dynamic team
          environment. -->
        </p>
      </div>
    </section>
    <section id="skills" class="row justify-content-center align-items-center my-2">
      <div class="col-md-10 text-center my-3 title">
        <span v-for="l in skills" :id="l?.id" class="color">{{ l?.letter }}</span>
      </div>
    </section>
    <section class="row justify-content-center p-2">
      <div class="col-6 col-md-2 py-2" title="Hyper Text Markup Language">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
          alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="Cascading Style Sheets">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
          alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="Bootstrap">
        <img class="img-fluid"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="Figma">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="Vue">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg"
          alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="JavaScript">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="Node.js">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="Mongo DataBase">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
          alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="C Sharp">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="DotNet">
        <img class="img-fluid"
          src="https://www.onesixsolutions.com/wp-content/uploads/2019/12/dotnet_round-e1576518490913.png" alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="MySQL">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
          alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="VS Code">
        <img class="img-fluid"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="">
      </div>
    </section>
    <section class="row">
      <div class="col-md-10">
        <p>Portfolio here</p>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
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
          let lett = document.getElementById(letter.id)
          lett.style.color = color;
          lett.style.fontSize = fntSze + "px"
          // logger.log(letter);
        }, i * 180);
      });
      AppState.skills.forEach((letter, i) => {
        setTimeout(() => {
          let lett = document.getElementById(letter.id)
          lett.style.color = color;
          lett.style.fontSize = fntSze + "px"
          // logger.log(letter);
        }, i * 200);
      });
    }
    // onMounted(() => setInterval(flow, 5000))

    // const t = setInterval(flow, 5000)

    return {
      abtMe,
      color,
      skills: computed(() => AppState.skills)
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
