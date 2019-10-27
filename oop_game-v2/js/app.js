/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  const phrase = new Phrase('Life is box of chocolate');
//  const game = new Game();
//  console.log(`Phrase - ${phrase.phrase}`);


// const game = new Game();
// game.phrases.forEach((phrase,index)=>{
//     console.log(`Phrase ${index} - phrase : ${phrase.phrase}`);
// });
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game={};
$('#btn__reset').on('click', function(event){
    game = new Game();
    game.reset();
    game.startGame();   
});

const qwertyDiv = $('#qwerty');
qwertyDiv.on('click',function(event){
    if(event.target.tagName === 'BUTTON'){
        game.handleInteraction(event.target);
    }
});
