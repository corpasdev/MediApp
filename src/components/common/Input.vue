<script>
import { ref } from 'vue';

export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const inputValue = ref(props.value);

    function handleInput(event) {
      inputValue.value = event.target.value;
      emit('update:value', inputValue.value);
    }

    return {
      inputValue,
      handleInput
    }
  }
}
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="inputValue"
    @input="handleInput"
  />
</template>


