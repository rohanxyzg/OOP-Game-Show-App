/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null ;
        this.numLetters = 0;
        
        
    }
    /**
* Creates phrases for use in game
* array of phrases that could be used in the game
*/
    createPhrases(){
        const str = ['Radio Gaga','Killer Queen','Love Of My Life','Liar','Bohemian Rhapsody'];
        let phraseArr = [];
        for(let i=0;i<5;i++)
            phraseArr[i] = new Phrase(str[i]);
        return phraseArr;   
    }
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomNum= (Math.floor(Math.random()*5));
        return this.phrases[randomNum];

    }
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
   
    startGame(){
      
        document.querySelector('#game-over-message').textContent = '';
        $('#overlay').hide();
        
       let activePhraseObject = new Phrase("");
        activePhraseObject = this.getRandomPhrase();
        activePhraseObject.addPhraseToDisplay();
        this.numLetters = activePhraseObject.countLetters();
        this.activePhrase = activePhraseObject;
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        if(($('li[class^="show"]').length)===this.numLetters){
            return true;
        }
        else
        return false;
    }
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed+=1;
        $('#scoreboard img[src="images/liveHeart.png"]').last().attr("src","images/lostHeart.png");
        if(this.missed===5)
        {
            return this.gameOver(false);
        }
        else
            return;
    

    }
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        if(gameWon){
            $('#overlay').show();
            $('#game-over-message').append("You win");
            $('#overlay').toggleClass("win");
            
        }
        else{
            $('#overlay').show();
            $('#game-over-message').append("You lose");
            $('#overlay').toggleClass("lose");
           
        }
        
    }
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        console.log(button);
        button["disabled"]=true;
        if(this.activePhrase.checkLetter(button.textContent)){
            button['classList'].add("chosen");
            this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin())
                return this.gameOver(true);

        }
        else{
            button['classList'].add("wrong");
            this.removeLife();
        }


    }

    reset(){
        document.querySelectorAll('#phrase li').forEach(li=>li.parentNode.removeChild(li));
        document.querySelectorAll('#qwerty button').forEach(button=>{
            button.removeAttribute('disabled');
            button.classList.remove('chosen','wrong');
        });
        document.querySelectorAll('#scoreboard img').forEach(heart=>heart.setAttribute("src","images/liveHeart.png"));
        document.querySelector('#overlay').className = 'start';
        
    }

        

   
    

}