<script lang="ts">
import { computed, defineComponent } from 'vue'


export default defineComponent({
  name: 'WelcomeMessage',
  props: {
    message: { type: String, required: true }
  },
  setup(props) {
    const welcomeMessage = computed(() => props.message)

    return {
      welcomeMessage
    }
  }
})
</script>

<template>
  <article class="welcome">
    <h1>Bienvenido@</h1>
    <h3>Brandon Corpas G.</h3>
    <p>Bacteriologo</p>
    <p>{{ welcomeMessage }}</p>
  </article>
</template>
<style scoped>
 .welcome {
  width: 100%;
  height: 20vh;
  display: flex;
  background-image: url('../../assets/pictureWelcome.jpg');
  background-position-x: 50%;
  background-position-y: 20%;
  background-repeat: no-repeat;
  background-size:cover;
 }
</style>
