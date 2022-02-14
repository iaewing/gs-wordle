<template>
  <div class="bg-black">
    <div class="text-white">
      <LetterRow :letters="word" :colours="colours"/>
    </div>
    <SimpleKeyboard @onKeyPress="onKeyPress"/>
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
      const rightAnswer = ("water").toUpperCase().split('');
      // console.log(this.colours)
      // this.colours.push('before map')
      // console.log(this.colours)
      this.word.map(function (letter, index) {
        console.log(letter, index, rightAnswer[index]);
        if (letter === rightAnswer[index]) {
          console.log('checking right answer');
          this.colours.push('correct');
        } else if (rightAnswer.includes(letter)) {
          console.log('checking wrong answer');
          this.colours.push('wrong spot');
        } else {
          console.log('checking for no answer');
          this.colours.push('not in word');
        }
      }, this)
    },

    onKeyPress(button) {
      if (button === "{enter}") {
        this.submit();
      } else if (button === "{bksp}") {
        this.word.pop();
      } else {
        this.word.push(button.toUpperCase());
      }
    },
    submit() {
      if (this.word.length !== 5) {
        return;
      }
      this.validateLettersWithColours();
    }
  }
}
</script>

<style>
</style>
