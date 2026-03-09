<script>

export default {
  name: 'Checkbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup({ modelValue }, { emit }) {
    function handleToggle() {
      emit('update:modelValue', !modelValue)
    }

    return {
      handleToggle
    }
  }
}
</script>

<template>
  <input :checked="modelValue" type="checkbox" class="checkbox" @click="handleToggle" />
</template>

<style type="css" scoped>
.checkbox {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  vertical-align: middle;
}

.main-wrapper.dark .checkbox {
  border: 2px solid lightgrey;
}
.main-wrapper.white .checkbox {
  border: 2px solid black;
}

.checkbox:checked {
  background-color: #4285f4;
  border-color: #4285f4;
}

.checkbox:checked::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 0px;
  width: 5px;
  height: 10px;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.main-wrapper.dark .checkbox:checked::after {
  border: solid white;
}
.main-wrapper.white .checkbox:checked::after {
  border: solid black;
}
</style>