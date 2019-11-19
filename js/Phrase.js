/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{

    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        const $phraseUl = $('#phrase ul');
        for(let i=0;i<this.phrase.length;i++)
        {   
            if(this.phrase.charAt(i)!== ' ')
                $phraseUl.append(`<li class="hide letter ${this.phrase.charAt(i)}">${this.phrase.charAt(i)}</li>`);
            else
                $phraseUl.append(`<li class="hide space"> </li>`);
        }
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    countLetters(){
        let count = 0;
        for(let i = 0;i<this.phrase.length;i++)
            if(this.phrase.charAt(i)!=' ')
                count = count + 1;
        return count;       
    }
    checkLetter(letter) {
        for(let i=0;i<this.phrase.length;i++){
            if(this.phrase.charAt(i)===letter)
                return true;
        }
        return false;

    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const list = document.getElementsByClassName(letter);
        for (let item of list) {
            item.classList.replace('hide', 'show');
        }

    }


}