/**
 * Created by ghost9087 on 15. 3. 26..
 */
var printCnt = 3;
var currentIndex = 0;
var img_templ = document.getElementById("img_template").innerHTML;

//page 0-2
function setPage(index){
    if(index < 0 || index > todayPhoto.length / 3){
        return;
    }
    currentIndex = index;
    var wrap = document.getElementById("wrap");
    wrap.innerHTML = "";

    var start = index * printCnt;
    var end = (index +1) *printCnt < todayPhoto.length ? (index +1) *printCnt : todayPhoto.length;

    str = "";
    console.log(end);
    for(i = start; i < end; i++){
        var content = img_templ.replace("{img_path}", todayPhoto[i].img);
        content = content.replace("{content}", todayPhoto[i].title);
        str += content;
    }

    wrap.innerHTML = str;
}

function setButton(){

    setPrevButton();
    setNextButton();
}
function setNextButton() {
    var next = document.getElementById("next");
    next.addEventListener("click", function(ev){
        setPage(currentIndex+1);
    })
}
function setPrevButton() {
    var prev = document.getElementById("prev");
    prev.addEventListener("click", function(ev){
        setPage(currentIndex-1);
    })
}

setPage(0);
setButton();