<template>
  <nav id="nav" class="navbar navbar-expand-md navbar-dark bg-trans px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">

      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto">
        <li>
          <button @click="goHome()" class="btn btn-light mx-2">Home</button>
        </li>
        <li>
          <button @click="goAbout()" class="btn btn-light mx-2">About</button>
        </li>
        <li>
          <button @click="goSkills()" class="btn btn-light mx-2">Skills</button>
        </li>
        <li>
          <button @click="goPort()" class="btn btn-light mx-2">Portfolio</button>
        </li>
        <li>
          <button @click="goContact()" class="btn btn-light mx-2">Contact</button>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
    </div>
  </nav>
</template>

<script>
import { logger } from '../utils/Logger.js'
import Login from './Login.vue'
export default {
  setup() {
    return {

      goSkills() {
        let skillElem = document.getElementById("skills")
        skillElem.scrollIntoView({ block: "center" })
      },
      goAbout() {
        let aboutElem = document.getElementById("abtMe")
        aboutElem.scrollIntoView({ block: "center" })
      },
      goPort() {
        let portElem = document.getElementById("port")
        portElem.scrollIntoView({ block: "center" })
      },
      goContact() {
        window.scrollTo(0, 10000)
      },

      goHome() {
        window.scrollTo(0, 0)
      }
    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.bg-trans {
  background-color: rgba(69, 66, 132, 0);
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
