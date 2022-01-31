<template>
  <div class="flex flex-row">
    <LetterTile v-for="letter in letters" :key="`tile ${letter}`" :letter="letter"/>
  </div>
</template>

<script >
import {defineComponent} from "vue";
import LetterTile from "./LetterTile";
// const ROW_LENGTH = 5;
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
    }
  }
});
</script>

<style lang="scss" scoped>

</style>