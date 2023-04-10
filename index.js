// Code your solutions in this file
/*

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

writeCards(["Charlie", "Samip", "Ali"], "birthday");

const gift  = ["teddy bear", "drone", "doll"];
function wrapGifts(gift) {
    let j = 0
    while(j < gift.length){
        console.log(`Wrapped ${gift[j]} and added a bow!`);
        j++;
    }
    return gift;
}


*/

function writeCards(stringNames, eventName) {
    const writtenCards = [];
    for (let i = 0; i < stringNames.length; i++) {
        writtenCards.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return writtenCards;
}


function countDown(number) {
    while(number >= 0){
        console.log(number--)
    }
}

