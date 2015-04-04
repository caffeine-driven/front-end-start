/**
 * Created by ghost9087 on 15. 4. 2..
 */
setButton();
var currentPage = 1;
var searchWord = '';
function loadScript(searchword, pageNumber)
{
    //currentPage = pageNumber;
    //var head = document.getElementsByTagName("head")[0];
    //var script = document.createElement('script');
    //script.type = 'text/javascript';
    //script.src = 'https://apis.daum.net/search/web?apikey=a90f077791b6169ebbf969b16fe594ae&q='+searchword+'&output=json&callback=loadJSON&pageno='+pageNumber;
    //head.appendChild(script);
    var url = 'https://apis.daum.net/search/web?apikey=a90f077791b6169ebbf969b16fe594ae&q='+searchword+'&output=json&callback=loadJSON&pageno='+pageNumber;
    getJSON(url, loadJSON);
}
function setButton(){
    setSearchButton();
    setMoreButton();
}
function getSearchWord() {
    var input = document.getElementById('search_word');
    return input.value;
}
function setSearchButton() {
    var next = document.getElementById("btn_search");
    next.addEventListener("click", function(ev){
        var list_containor = document.getElementById('search_list');
        list_containor.innerHTML = '';

        searchWord = getSearchWord();

        loadScript(searchWord, 1);
    });
}
function setMoreButton() {
    var more = document.getElementById('more');
    more.addEventListener('click', function(ev){
        loadScript(searchWord, currentPage+1);
    });
}
