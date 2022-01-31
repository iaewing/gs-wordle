<template>
  <div>
    <LetterRow :letters="letters"/>
    <input type="text" v-model="word" maxlength="5" minlength="5">
  </div>

</template>

<script>
import LetterRow from "./components/LetterRow";

export const FIVE_LETTER_WORDS = [
    'fight',
    'audio',
    'weary',
    'irate',
    'lemon',
];

export default {
  name: 'App',
  data() {
    return {
      word: 'irate',
      colors: []
    }
  },
  components: {
    LetterRow
  },
  computed: {
    letters() {
      return Array.from(this.word.toUpperCase());
    },
  },
  methods: {
    validateLettersWithColours() {
      this.letters.each(function (index, letter) {
        if (letter === this.FIVE_LETTER_WORDS[0][index])
        {
          this.colours[index] = 'green'
        }
        else if (this.FIVE_LETTER_WORDS[0].contains(letter))
        {
          this.colours[index] = 'yellow'
        }
        else {
          this.colours[index] = ''
        }
      })
    }
  }
}
</script>

<style>
</style>
