const audio = new Audio();
let isGameOn = false;

function play(){
    isGameOn = true;

    hideElement('home');
    hideElement('final-score');
    unhideElement('keyboard');

    setButtonNumber('score',0);
    setButtonNumber('life',3);

    continueGame();
}

function checkButton(event){
    if(isGameOn === false) return;
    const KeyPressed = event.key;
    const pressedButton = KeyPressed.toLowerCase();
    const expectedButton = document.getElementById('text-random').innerText.toLowerCase();
    
    if(KeyPressed === "Escape"){
        hideElement('keyboard');
        unhideElement('final-score');

        const totalScore = getButtonTextNumber('score');
        setButtonNumber('total-score', totalScore);

        const currentText = document.getElementById('text-random').innerText.toUpperCase();
        console.log(currentText);
        removeBackgroundColor(currentText);
    }

    if(pressedButton === expectedButton){
        let score = getButtonTextNumber('score');
        const newScore = score+1;
        setButtonNumber('score',newScore);

        audio.src = "../sounds/success.mp3";
        audio.play();

        removeBackgroundColor(expectedButton.toUpperCase());
        continueGame();
    }
    else{
        let life = getButtonTextNumber('life');
        const newLife = life - 1;
        setButtonNumber('life',newLife);

        audio.src = "../sounds/wrong.mp3";
        audio.play();

        if(newLife === 0){
            hideElement('keyboard');
            unhideElement('final-score');

            isGameOn = false;

            const totalScore = getButtonTextNumber('score');
            setButtonNumber('total-score', totalScore);

            const currentText = document.getElementById('text-random').innerText.toUpperCase();
            console.log(currentText);
            removeBackgroundColor(currentText);
        }
    }
}

document.addEventListener('keyup', checkButton);
  

function continueGame(){
    const letter = getRandomLetter();
    setLetter('text-random',letter);
    setBackgroundColor(letter);
}

