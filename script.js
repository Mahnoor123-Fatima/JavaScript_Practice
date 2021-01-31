// Challenge 1 your age in days
// take age multiply it by 365(days in a year)
function ageInDays() {
var birthYear = prompt('what year were you born...Good Friend');
var ageInDayss = (2021 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are '+ ageInDayss + ' days old.');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//Challenge 2: Cat Generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Challenge 3: Rock Paper Scissors