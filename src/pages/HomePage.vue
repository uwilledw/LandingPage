<template>
  <div class="container-fluid">
    <section id="hero" class="row hero-img justify-content-center align-items-center">
      <Navbar class="fixed-top" />
      <div class="col-md-6 text-light text-center">
        <h1>Hello, I am William Edwards, a fullstack software developer</h1>
      </div>
    </section>
    <section id="abtMe" class="row justify-content-center align-items-center my-2">
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
    <section id="port" class="row justify-content-center">
      <div class="col-md-10 text-center">
        <span v-for="l in port" :id="l?.id" class="color">{{ l?.letter }}</span>
      </div>
      <div class="col-lg-6 my-2">
        <div @click="flip(100)" class="keepr selectable">
          <div id="100" class="clear">
            <h1 class="text-light">Hello</h1>
          </div>
        </div>
      </div>
      <div class="col-lg-6 my-2">
        <div @click="flip(101)" class="gameStone selectable">
          <div id="101" class="clear">
            <h1 class="text-light">hi</h1>
          </div>
        </div>
      </div>
      <div class="col-lg-6 my-2">
        <div @click="flip(102)" class="tower selectable">
          <div id="102" class="clear">
            <h1 class="text-light">hey</h1>

          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="row justify-content-center">
      <div class="col-md-10 text-center">
        <span v-for="l in contact" :id="l?.id" class="color">{{ l?.letter }}</span>
      </div>
      <div class="col-10 text-center m-5">
        <!-- <a title="William's Github" href="https://github.com/uwilledw" class="btn btn-light mx-3"><i
            class="mdi mdi-github fs-3"></i></a>
        <a title="William's LinkedIn" href="https://www.linkedin.com/in/uwilliamedwards/" class="btn btn-light mx-3"><i
            class="mdi mdi-linkedin fs-3"></i></a>
        <a title="William's Gmail" href="williamedwards7717@gmail.com" class="btn btn-light mx-3"><i
            class="mdi mdi-email fs-3"></i></a> -->
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, watchEffect } from 'vue';
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
    onMounted(() => {
      setInterval(flow, 5000),
        setInterval(changeBg, 500)
    })


    function changeBg() {
      // logger.log(document.documentElement.scrollTop, "top")
      let navElem = document.getElementById("nav")
      if (document.documentElement.scrollTop > 10) {
        navElem.classList.add("nav-bg")
      } else {
        navElem.classList.remove("nav-bg")
        navElem.classList.add("ease")
      }
    }


    return {
      abtMe,
      color,
      skills: computed(() => AppState.skills),
      port: computed(() => AppState.port),
      contact: computed(() => AppState.contact),

      flip(id) {
        logger.log(id)
        let elem = document.getElementById(`${id}`)
        this.changeBg()
        if (elem.classList.contains("app-card")) {
          elem.classList.remove("app-card")
          elem.classList.add("clear")
        } else {
          elem.classList.add("app-card")
          elem.classList.remove("clear")
        }
      }
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
  height: 60vh;
  background-position: center;
  background-size: cover;
}

.my-img {
  width: 100%;
  height: 55vh;
  object-fit: cover;
  object-position: center;
}

.ease {
  transition: ease .4s;

}

.nav-bg {
  background-color: rgb(0, 0, 0);
  transition: ease .4s;
}

// .app-img {
//   width: 100%;
//   height: 35vh;
//   object-position: center;
// }

.keepr {
  width: 100%;
  height: 40vh;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1687154156757-25b60bb3892d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80");
}

.gameStone {
  width: 100%;
  height: 40vh;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1687154156757-25b60bb3892d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80");
}

.tower {
  width: 100%;
  height: 40vh;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1687154156757-25b60bb3892d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80");
}

.app-card {
  height: 100%;
  /* From https://css.glass */
  background: rgba(112, 102, 102, 0.51);
  // border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border: 1px solid rgba(112, 102, 102, 0.2);
  transition: ease .2s;
}

.clear {
  visibility: hidden;
  transition: ease .2s;
}
</style>
