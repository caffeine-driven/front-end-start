/**
 * Created by ghost9087 on 15. 6. 4..
 */

var scoreBoard = document.getElementById('score_area');
var score = 0;

function increaseScore(){
    score++;
    scoreBoard.innerHTML = score;
}
function decreaseScore(){
    if(score > 0)
        score--;
    scoreBoard.innerHTML = score;
}
function calcScore() {
    if (previousCard == null) {
        previousCard = this;
    }
    else {
        if (previousCard != this) {
            if (previousCard.innerHTML === this.innerHTML) {
                increaseScore();
                deactivateCard();
            }
            else{
                decreaseScore();

            }
            restoreCards(this);
            previousCard = null;
        }
    }
}