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
        removeBackgroundColor(expectedButton.toUpperCase());
        continueGame();
    }
    else{
        console.log("You lost a point");
    }
}

document.addEventListener('keyup', checkButton);

function continueGame(){
    const letter = getRandomLetter();
    setLetter('text-random',letter);
    setBackgroundColor(letter);
}

