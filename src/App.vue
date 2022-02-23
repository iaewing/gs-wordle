<template>
  <div class="bg-black">
    <div class="text-white">
      <LetterRow :letters="guesses[0].word" :colours="guesses[0].colours"/>
      <LetterRow :letters="guesses[1].word" :colours="guesses[1].colours"/>
      <LetterRow :letters="guesses[2].word" :colours="guesses[2].colours"/>
      <LetterRow :letters="guesses[3].word" :colours="guesses[3].colours"/>
      <LetterRow :letters="guesses[4].word" :colours="guesses[4].colours"/>
      <LetterRow :letters="guesses[5].word" :colours="guesses[5].colours"/>
    </div>
    <SimpleKeyboard @onKeyPress="onKeyPress"/>
  </div>

</template>

<script>
import LetterRow from "./components/LetterRow";
import SimpleKeyboard from "@/components/SimpleKeyboard";
import AllowedWords from 'raw-loader!../wordle-allowed-guesses.txt';

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
      guesses: [
        {word: [], colours: []},
        {word: [], colours: []},
        {word: [], colours: []},
        {word: [], colours: []},
        {word: [], colours: []},
        {word: [], colours: []},
      ],
      currentGuess: 0,
      isCorrect: false,
      wordList: "",
    }
  },
  components: {
    LetterRow,
    SimpleKeyboard
  },
  methods: {
    validateLettersWithColours() {
      const rightAnswer = ("water").toUpperCase().split('');

      this.guesses[this.currentGuess].word.map(function (letter, index) {
        console.log(letter, index, rightAnswer[index]);
        if (letter === rightAnswer[index]) {
          console.log('checking right answer');
          this.guesses[this.currentGuess].colours.push('correct');
        } else if (rightAnswer.includes(letter)) {
          console.log('checking wrong answer');
          this.guesses[this.currentGuess].colours.push('wrong spot');
        } else {
          console.log('checking for no answer');
          this.guesses[this.currentGuess].colours.push('not in word');
        }
      }, this)
    },
    onKeyPress(button) {
      if (button === "{enter}") {
        this.submit();
      } else if (button === "{bksp}") {
        this.guesses[this.currentGuess].word.pop();
      } else {
        this.guesses[this.currentGuess].word.push(button.toUpperCase());
      }
    },
    submit() {
      if (this.guesses[this.currentGuess].word.length !== 5 || this.checkWord() !== true) {
        return;
      }
      this.validateLettersWithColours();

      this.currentGuess += 1;
      if (this.guesses[this.currentGuess].colours.filter(color => color != 'correct').length === 0) {
        alert('You won in ' + this.currentGuess + ' tries');
      }
    },
    checkWord()
    {
      return AllowedWords.match(this.guesses[this.currentGuess].word);
    }
  }
}
</script>

<style>
</style>
