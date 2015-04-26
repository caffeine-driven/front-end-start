
/**
 * Created by ghost9087 on 15. 4. 9..
 */
var game_area = $('game_area');
var red_box = $('red_box');
var score_text = $('score');
var interval = $('interval');
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
    $(window).on("resize", init_box);
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
    red_box.top('50%');
    red_box.left('50%');
}
function increaseScore() {
    score++;
    score_text.html(score);
}
function clearScore(){
    score = 0;
    score_text.html(score);
}
function blinkBox() {
    red_box.css('background-color', '#0000db');
    $(window).delay(100).css('background-color', '#FF0000');
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
    red_box.on('clock', function(ev){
        onBoxClick();
    });
}
function stop_game() {
    clear_area();
    clearScore();
    window.clearInterval(timer);
}
function startButton() {
    $('start_game').on('click', function (ev) {
        start_game();
    });
}
function stopButton() {
    $('stop_game').on('click', function(ev){
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

    red_box.css('top', position_y+'px');
    red_box.css('left', position_x+'px');
}