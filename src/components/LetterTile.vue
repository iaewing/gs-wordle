<template>
<div class="border border-solid border-2 border-gray-500 w-12 h-16 flex items-center justify-center">
  {{ letter }}
</div>
</template>

<script >
import {defineComponent} from "vue";

export default defineComponent({
  name: "LetterTile",
  props: {
    letter: {
      type: String,
      default: null,
    }
  }
});
</script>

<style lang="scss" scoped>

</style>