/**
 * Created by ghost9087 on 15. 6. 4..
 */

function createCards(i, callback) {
    var card = document.createElement('div');
    card.classList.add('card');
    var textNode = document.createTextNode(i);

    card.appendChild(textNode);
    card.addEventListener('click', callback);

    return card;
}
function restoreCards() {
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
