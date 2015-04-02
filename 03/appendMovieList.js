/**
 * Created by ghost9087 on 15. 4. 2..
 */

var img_templ = document.getElementById("img_template").innerHTML;

function done(object){
    console.log(object);
    console.log(object.data[0].reservation);
    var list_containor = document.getElementById('boxoffice_list');
    clearList(list_containor);
    appendList(list_containor, object.data);

}

function appendList(list_containor, object) {
    for(var i in object){
        var list_item = img_templ.replace('{img_path}', object[i].photo.fullname);
        list_item = list_item.replace('{title}', object[i].titleKo);
        list_item = list_item.replace('{star_number}', object[i].moviePoint.expectPointAvg);
        if(object[i].reservation != null)
            list_item = list_item.replace('{ratio}', object[i].reservation.cpId);
        else
            list_item = list_item.replace('{ratio}', '데이터 없음');
        list_containor.innerHTML += list_item;
    }
}
function clearList(list_containor) {
    list_containor.innerHTML = '';
}

