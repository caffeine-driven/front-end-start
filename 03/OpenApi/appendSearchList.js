/**
 * Created by ghost9087 on 15. 4. 2..
 */

var search_tmpl = document.getElementById("search_tmpl").innerHTML;

function loadJSON(object){
    var list_containor = document.getElementById('search_list');
    appendList(list_containor, object.channel.item);

}

function html_char_filter(list_item) {
    list_item = list_item.replace(/&lt;/g, '<');
    list_item = list_item.replace(/&gt;/g, '>');
    return list_item;
}
function appendList(list_containor, item) {
    for(var index in item){
        var list_item = search_tmpl.replace('{link}', item[index].link);
        list_item = list_item.replace('{title}', item[index].title);

        list_item = html_char_filter(list_item);

        list_containor.innerHTML += list_item;
    }
}
function clearList(list_containor) {
    list_containor.innerHTML = '';
}

