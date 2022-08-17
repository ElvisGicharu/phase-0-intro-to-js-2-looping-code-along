// Code your solutions in this file
// for (let age=30; age < 40; age++){
//     console.log(`You are ${age} years old. Happy birthday to you`);
    
// };

// const gifts=['teddy bear', 'drone','doll'];
// function wrapGifts(gifts){
//     for(let i=0;i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bowl`);
//         debugger;
//     }
//     return gifts;
// }
// wrapGifts();


const names= ["Charlie", "Samip", "Ali"];
const event='Birthday';
function writeCards(names,event){
    let thankyouCards =[]
 for(let i=0; i < names.length ;i++){
    thankyouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
 }

 return thankyouCards;
}

let number= 15;
function countDown(number){
   while(number >-1){
      console.log(number);
      number --;
   }
}

