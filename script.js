const count = document.getElementById('occur');
const enteredText = document.getElementById('para');
const newWord = document.getElementById('new-word');
const replaceWord = document.getElementById('replace-word');
const checkbox = document.getElementById('checkbox');
const replace = document.getElementById('replace');
const replaceAll = document.getElementById('replace-all');
let newText;
let oldText;
let text;
let text1;
let change;
let occur = 0;
let add = 0;

function readTextError(){
    if(enteredText.value.trim()){
    } else{
        alert('Plaese enter some text.');
    }
};

function changeWordError(){
    if(newWord.value.trim() && replaceWord.value.trim()){
    } else {
        alert('Plaese enter text you want to change/write.');
    }
};

function changeWord(){
    if (checkbox.checked){
        text = text.replace(oldText, newText);
        enteredText.value = text;
    } else{
        text1 = text1.replace(oldText.toLowerCase(), newText);
        enteredText.value = text1;
    }
    if(occur > 0){
        --occur;
        count.innerHTML = occur;
    }
};

function changeAllWord(){
        if (checkbox.checked == 1){
            text = text.replaceAll(oldText, newText);
        } else {
            text = text1.replaceAll(oldText.toLowerCase(), newText);
        }
        enteredText.value = text;
        occur = 0;
        count.innerHTML = occur;
};

function checkboxActive(){
    if (checkbox.checked){
        occur = 0;
        const splits = text.split(' ');
        splits.forEach(split => {
            if(split === oldText){
                ++occur;
                count.innerHTML = occur;
            }
        });
    } else {
        text1 = text.replaceAll(oldText, oldText.toLowerCase());
        occur = 0;
        const split = text.split(' ');
        split.forEach(split => {
            if(split.toLowerCase() === oldText.toLowerCase()){
                ++occur;
                count.innerHTML = occur;
            }
        });
    }
};

enteredText.addEventListener('input', e => {
    text = e.target.value;
});

newWord.addEventListener('input', e => {
    newText = e.target.value;
});

replaceWord.addEventListener('input', e => {
    occur = 0
    oldText = e.target.value;
    const split = text.split(' ');
    split.forEach(split => {
        if(split === oldText){
            ++occur;
            count.innerHTML = occur;
        }
    })
});

replace.addEventListener('click', () => {
    readTextError();
    changeWordError();
    changeWord();
});

replaceAll.addEventListener('click', () => {
    readTextError();
    changeWordError();
    changeAllWord();
});