/**
 * Created by ghost9087 on 15. 6. 4..
 */
var cards = [1,2,3,4,5,1,2,3,4,5];
var cardBoard = document.getElementById('card_bard');

var array = [];



array = shuffle(cards);
initCardBoard();

function isGameFinished() {
    var fliped = document.querySelectorAll('.matched');
    if(fliped.length == 10) {
        window.alert('게임끝ㅋ');
    }
}
function onCardClick(ev){
    if(this.classList.contains('matched'))
        return;
    flipCard(this);
    calcScore.call(this);
    isGameFinished();
}

function initCardBoard(){
    for(var i in array){
        var card = createCards(array[i]);
        cardBoard.appendChild(card);
    }
}
