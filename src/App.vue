<template @scroll="test()">
  <header class="sticky-top">
    <!-- <Navbar /> -->
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark text-light p-5">
    <h5 class="m-0">Copyright © 2023 - William Edwards</h5>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { logger } from './utils/Logger.js'

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      test() {
        logger.log("test")
      }
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
