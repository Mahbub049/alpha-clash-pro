function play(){
    hideElement('home')
    unhideElement('keyboard')
    continueGame();
}

function checkButton(event){
    const KeyPressed = event.key;
    const pressedButton = KeyPressed.toLowerCase();
    const expectedButton = document.getElementById('text-random').innerText.toLowerCase();
    
    if(pressedButton === expectedButton){
        let score = getButtonTextNumber('score');
        const newScore = score+1;
        setButtonNumber('score',newScore);

        removeBackgroundColor(expectedButton.toUpperCase());
        continueGame();
    }
    else{
        console.log("You lost a point");
        let life = getButtonTextNumber('life');
        const newLife = life - 1;
        console.log(newLife);
        setButtonNumber('life',newLife);
    }
}

document.addEventListener('keyup', checkButton);

function continueGame(){
    const letter = getRandomLetter();
    setLetter('text-random',letter);
    setBackgroundColor(letter);
}

