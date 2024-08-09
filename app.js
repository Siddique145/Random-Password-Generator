var generate_btn = document.getElementById('generate_btn');
var number_array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var capitalLetters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var specialCharacters = [
    '!', '@', '#', '$', '%', '^', '&', '*','=',
];
var smallAlphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];


// function generate() {
//     var number = document.getElementById('number').value;
//     var capital_letters = document.getElementById('capital_letters').value;
//     var special_characteristics = document.getElementById('special_characteristics').value;
//     var small_letters = document.getElementById('small_letters').value;
    
//     console.log('Number: ' + number);
//     console.log('Capital Letters: ' + capital_letters);
//     console.log('Special Characteristics: ' + special_characteristics);
//     console.log('Small Letters: ' + small_letters);

//     for (let i = 0; i <= number.value; i++) {
//         var randomnumber = Math.floor(Math.random() * number_array.length);
//     }
//     generated_Password.push(number_array[randomnumber])
//     console.log(generated_Password)
// }


function generate() {
    
    var numberCount = parseInt(document.getElementById('number').value) || 0;
    var capitalCount = parseInt(document.getElementById('capital_letters').value) || 0;
    var specialCount = parseInt(document.getElementById('special_characteristics').value) || 0;
    var smallCount = parseInt(document.getElementById('small_letters').value) || 0;
    var generated_span = document.getElementById("generated_span")

    // generated_span.style.display = "none!important"

    // var generated_Password = []  
    var generated_Password = [];
    
    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    
    for (let i = 0; i < numberCount; i++) {
        generated_Password.push(getRandomElement(number_array));
    }
    for (let i = 0; i < capitalCount; i++) {
        generated_Password.push(getRandomElement(capitalLetters));
    }
    for (let i = 0; i < specialCount; i++) {
        generated_Password.push(getRandomElement(specialCharacters));
    }
    for (let i = 0; i < smallCount; i++) {
        generated_Password.push(getRandomElement(smallAlphabet));
    }

    generated_Password = generated_Password.sort(() => Math.random() - 0.5);
    console.log(generated_Password.join(''));
    // generate_btn.addEventListener('click', generate);
    generated_span.innerText = generated_Password.join('')
}

generate_btn.addEventListener('click', generate);
