<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default{
  components: {
    Header,
    Footer
  },
  setup(){
    const store = useStore();
    onBeforeMount(()=> {
      store.dispatch('fetchUser')
    })

  }
}
</script>

<template>
  <Header />
  <main class="container_main">
    <RouterView />
  </main>
  <Footer />
</template>



<style scoped>
.container_main{
  width: 100%;
  flex-grow: 1;
}
</style>

