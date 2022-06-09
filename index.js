/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts);
*/

const cards = []
const friends = ["Guadalupe","Ollie", "Aki"] ;
const event1 = "surprise"

function writeCards(friends, event) {
    for (let i = 0; i < friends.length; i++) {
        cards.push(`Thank you, ${friends[i]}, for the wonderful ${event} gift!`);
        }
    return cards        
}

 //yeah, i really wish the ACTUAL expectation for the code above was CLEARLY EXPLAINED in the assignment instructions

 
function countDown(i) {
    while (i >= 0) {
        i--;
        console.log(i+1);
    }
 }

 
