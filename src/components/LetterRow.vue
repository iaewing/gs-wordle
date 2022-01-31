<template>
  <LetterTile />
  <LetterTile />
  <LetterTile />
  <LetterTile />
  <LetterTile />
</template>

<script >
import {defineComponent} from "vue";
import LetterTile from "./LetterTile";

export default defineComponent({
  name: "LetterRow",
  components: {
    LetterTile
  }
});
</script>

<style lang="scss" scoped>

</style>