<template>
  <div class="border border-solid border-2 border-gray-500 w-12 h-16 flex items-center justify-center"
       :class="bgColour">
    {{ letter }}
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "LetterTile",
  props: {
    letter: {
      type: String,
      default: null,
    },
    colour: {
      type: String,
      default: 'no answer'
    }
  },
  computed: {
    bgColour(props) {
      switch (props.colour) {
        case 'correct':
          return 'bg-green-400';
        case 'wrong spot':
          return 'bg-yellow-400';
        case 'not in word':
          return 'bg-gray-400';
        default:
          return 'bg-transparent';
      }
    }
  }
})
;
</script>

<style lang="scss" scoped>

</style>