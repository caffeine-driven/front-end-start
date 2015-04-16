
/**
 * Created by ghost9087 on 15. 4. 9..
 */
var game_area = document.getElementById('game_area');
var red_box = document.getElementById('red_box');
var score_text = document.getElementById('score');
var interval = document.getElementById('interval');
var timer = null;
var width = 0;
var height = 0;
var score = 0;
var bClicked = false;
var defaultInteval = 3000;

init();

function init() {
    setButton();
    init_box();
    window.addEventListener("resize", init_box);
    if(interval.value == '')
        interval.value = defaultInteval;
}
function init_box(){
    width = window.innerWidth;
    height = window.innerHeight;
    game_area.width = width;
    game_area.height = height;
}
function clear_area(){
    red_box.style.top = '50%';
    red_box.style.left = '50%';
}
function increaseScore() {
    score++;
    score_text.innerHTML = score;
}
function clearScore(){
    score = 0;
    score_text.innerHTML = score;
}
function blinkBox() {
    red_box.style.backgroundColor = '#0000db';
    window.setTimeout(function (){
        red_box.style.backgroundColor = '#FF0000';
    }, 100);
}
function onBoxClick() {
    if (!bClicked) {
        bClicked = true;
        blinkBox();
        increaseScore();
    }
}
function start_game() {
    clear_area();
    init_game();
    clearScore();
    red_box.addEventListener('click', function(ev){
        onBoxClick();
    })
}
function stop_game() {
    clear_area();
    clearScore();
    window.clearInterval(timer);
}
function startButton() {
    var start_button = document.getElementById('start_game');
    start_button.addEventListener('click', function (ev) {
        start_game();
    });
}
function stopButton() {
    var stop_button = document.getElementById('stop_game');
    stop_button.addEventListener('click', function(ev){
        stop_game();
    });
}
function setButton() {
    startButton();
    stopButton();
}
function init_game() {
    var interval_time = interval.value;
    timer = window.setInterval(afterInterval, interval_time);
}
function afterInterval(){
    bClicked = false;
    reposition_box();
}
function reposition_box(){
    var position_x = Math.random()*width;
    var position_y = Math.random()*height;

    if(position_x > width-100 && position_x > 100){
        position_x -= 100;
    }

    if(position_y > height-100 && position_y > 100){
        position_y -= 100;
    }

    red_box.style.top = position_y+'px';
    red_box.style.left = position_x+'px';
}