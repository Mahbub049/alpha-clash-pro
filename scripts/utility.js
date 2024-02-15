function hideElement(elementName){
    const element = document.getElementById(elementName);
    element.classList.add('hidden');
}
function unhideElement(elementName){
    const element = document.getElementById(elementName);
    element.classList.remove('hidden');
}

function setBackgroundColor(elementID){
    document.getElementById(elementID).classList.add('bg-[#FFA500]')
}

function removeBackgroundColor(elementID){
    document.getElementById(elementID).classList.remove('bg-[#FFA500]')
}

function getRandomLetter(){
    //String Array
    const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const stringArray = string.split('');

    //Random Index
    const randomIndex = parseInt(Math.random()*26);

    const randomLetter = stringArray[randomIndex];
    return randomLetter;
}

function setLetter(IDName, letter){
    document.getElementById(IDName).innerText = letter;
}

function getButtonTextNumber(elementName){
    const element = document.getElementById(elementName);
    const elementConvertedValue = parseInt(element.innerText);
    return elementConvertedValue;
}

function setButtonNumber(elementName,value){
    const element = document.getElementById(elementName);
    element.innerText = value;
}