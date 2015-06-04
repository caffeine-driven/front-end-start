/**
 * Created by ghost9087 on 15. 6. 4..
 */

var scoreBoard = document.getElementById('score_area');
var score = 0;

function increaseScore(){
    score++;
    updateScore();
}
function decreaseScore(){
    if(score > 0)
        score--;
    updateScore();
}
function updateScore(){
    scoreBoard.innerHTML = score;
}
function clearScore(){
    score = 0;
    updateScore();
}
