function play(){
    hideElement('home')
    unhideElement('keyboard')
    continueGame();
}

function continueGame(){
    const letter = getRandomLetter();
    setLetter('text-random',letter);
    setBackgroundColor(letter);
    
}