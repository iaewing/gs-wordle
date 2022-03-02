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
import {validateLettersWithColors} from "./utilities";

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
      correctAnswer: this.getWinningWord()
    }
  },
  components: {
    LetterRow,
    SimpleKeyboard
  },
  methods: {
    getWinningWord() {
      let wordArray = AllowedWords.split('\n');
      const randomIndexOfWordArray = Math.floor(Math.random() * wordArray.length);
      const chosenWord = wordArray[randomIndexOfWordArray];
      console.log('chosen word:', wordArray[randomIndexOfWordArray]);

      return chosenWord;
    },
    validateLettersWithColours() {
      this.guesses[this.currentGuess].word.colours = validateLettersWithColors(this.correctAnswer, this.currentGuess, this.guesses);
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
      if (this.guesses[this.currentGuess].word.join('').toLowerCase() === this.correctAnswer) {
        alert('You won in ' + (this.currentGuess + 1) + ' tries');
      }
      this.currentGuess += 1;
    },
    checkWord() {
      const guess = this.guesses[this.currentGuess].word;
      const formattedGuess = Object.values(guess).join('').toLowerCase();
      return AllowedWords.includes(formattedGuess);
    }
  }
}
</script>

<style>
</style>
