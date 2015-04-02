/**
 * Created by ghost9087 on 15. 4. 2..
 */
loadScript(1);
setButton();
var currentPage = 1;
function loadScript(pageNumber)
{
    currentPage = pageNumber;
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=5&callback=done&pageNo='+pageNumber;
    head.appendChild(script);
}

function setButton(){
    setPrevButton();
    setNextButton();
}
function setNextButton() {
    var next = document.getElementById("next");
    next.addEventListener("click", function(ev){
        if(currentPage === 2)   currentPage = 1;
        else                    currentPage++;
        loadScript(currentPage)
    })
}
function setPrevButton() {
    var prev = document.getElementById("prev");
    prev.addEventListener("click", function(ev){
        if(currentPage === 1)   currentPage = 2;
        else                    currentPage--;
        loadScript(currentPage);
    })
}