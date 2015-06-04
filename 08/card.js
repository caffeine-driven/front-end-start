/**
 * Created by ghost9087 on 15. 6. 4..
 */
var previousCard = null;
var currentCard = null;
function createCards(i) {
    var card = document.createElement('div');
    card.className = 'card';
    var textNode = document.createTextNode(i);

    card.appendChild(textNode);
    card.addEventListener('click', onCardClick);

    return card;
}
function restoreCards(card) {
    currentCard = card;
    window.setTimeout(function(){
        var fliped = document.querySelectorAll('.card_flip');
        for(var i = 0; i < fliped.length; i++){
            fliped[i].classList.remove('card_flip');
        }
    }, 500);
}
function deactivateCard() {
    var fliped = document.querySelectorAll('.card_flip');
    for(var i = 0; i < fliped.length; i++){
        fliped[i].classList.add('matched');
    }
}
function flipCard(card) {
    card.classList.add('card_flip');
}
