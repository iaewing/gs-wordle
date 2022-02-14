<template>
  <div class="flex flex-row">
    <LetterTile v-for="index in wordLength" :key="`${index-1} tile`" :colour="colours[index-1]" :letter="letters[index-1] ?? ''"/>
  </div>
</template>

<script >
import {defineComponent} from "vue";
import LetterTile from "./LetterTile";

export default defineComponent({
  name: "LetterRow",
  components: {
    LetterTile
  },
  props: {
    letters: {
      type: Array,
      default: () => {
       return []
      }
    },
    wordLength: {
      type: Number,
      default: () => {
        return 5
      }
    },
    colours:{
      type: Array,
      default: () => {
        return []
      }
    }
  }
});
</script>

<style lang="scss" scoped>

</style>