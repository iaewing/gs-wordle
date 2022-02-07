<template>
  <div>
    <LetterRow :letters="word" :colours="colours"/>
    <input type="text" v-model="word" maxlength="5" minlength="5">
    <input class="input" />
    <SimpleKeyboard @onKeyPress="onKeyPress" />
  </div>

</template>

<script>
import LetterRow from "./components/LetterRow";
import SimpleKeyboard from "@/components/SimpleKeyboard";

//TODO
// Fix the validateLettersWithColours()
// it can't deal with five letter words??

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
      word: [],
      colours: []
    }
  },
  components: {
    LetterRow,
    SimpleKeyboard
  },
  methods: {
    validateLettersWithColours() {
      this.word.map(function (letter, index) {
        if (letter === this.FIVE_LETTER_WORDS[0].toArray()[index])
        {
          this.colours[index] = 'green'
        }
        else if (this.FIVE_LETTER_WORDS[0].toArray().contains(letter))
        {
          this.colours[index] = 'yellow'
        }
        else {
          this.colours[index] = ''
        }
      })
    },

    onKeyPress(button) {
      if(button === "{enter}") {
        this.submit();
      } else if(button === "{bksp}") {
        this.word.pop();
      } else {
        this.word.push(button.toUpperCase());
      }
    },
    submit()
    {
      if (this.word.length !== 5)
      {
        return;
      }
      this.validateLettersWithColours();
    }
  }
}
</script>

<style>
</style>
