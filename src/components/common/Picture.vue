<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    pictureClass: {
      type: String,
      default: ''
    }
  }
})
</script>

<template>
  <section :class="pictureClass">
    <slot></slot>
  </section>
</template>

<style scoped>
.picture {
  border-radius: 10px 0 0 10px;
  background-position-x: 50%;
  background-position-y: 50%;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
}

</style>
