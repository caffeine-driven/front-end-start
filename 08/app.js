/**
 * Created by ghost9087 on 15. 6. 4..
 */
var initialCardList = [1,2,3,4,5,1,2,3,4,5];
var cardBoard = document.getElementById('card_bard');
var previousCard = null;
var currentCard = null;

initCardBoard();

function isGameFinished() {
    var fliped = document.querySelectorAll('.matched');
    if(fliped.length == 10) {
        window.alert('게임 끝!!!!!');
        initCardBoard();
    }
}
function onCardClick(ev){
    if(this.classList.contains('matched'))
        return;
    flipCard(this);
    calcScore.call(this);
    isGameFinished();
}

function calcScore() {
    if (previousCard == null) {
        previousCard = this;
    }
    else if (previousCard != this) {
        if (previousCard.innerHTML === this.innerHTML) {
            increaseScore();
            deactivateCard();
        }
        else{
            decreaseScore();
        }
        restoreCards();
        previousCard = null;
    }
}
function initCardBoard(){
    var cardList = shuffle(initialCardList);
    cardBoard.innerHTML = '';
    for(var i in cardList){
        var card = createCards(cardList[i], onCardClick);
        cardBoard.appendChild(card);
    }
    clearScore();
}
