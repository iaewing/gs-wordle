export function validateLettersWithColors(correctAnswer, currentGuess, guesses) {
    const rightAnswer = correctAnswer.toUpperCase().split('');
    let newColours = guesses[currentGuess].colours;

    guesses[currentGuess].word.forEach(function (letter, index) {
        if (letter === rightAnswer[index]) {
            newColours.push('correct');
        } else if (rightAnswer.includes(letter)) {
            newColours.push('wrong spot');
        } else {
            newColours.push('not in word');
        }
    })

    return newColours;
}

//TODO: test this ^^^^