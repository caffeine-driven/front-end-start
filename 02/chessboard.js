/**
 * Created by ghost9087 on 15. 3. 26..
 */
var board = document.getElementById("board");
function onClickBoard(ev){
    var spans = document.querySelectorAll('span.red');
    if(spans.length > 0){
        for(var i in spans){
            if(spans[i].nodeName == 'SPAN')
            {
                var red_remove = spans[i].className.replace(' red', '');
                console.log(red_remove);
                spans[i].className = red_remove;
            }
        }
    }
    this.className += ' red';
}
function addClickEvent(){
    var elements =  document.querySelectorAll('span');
    console.log(elements);
    for(var index in elements){
        elements[index].addEventListener('click', onClickBoard);
    }
}
for(var i=0; i<4; i++){
//        var parent_node = document.createElement('div');
//        parent_node.className = "board_line";

//        board.appendChild(parent_node);

    var strContent = "";

    for(var j=0; j<4; j++){
        var checkboard_color = "";

        if(i %2 ==0)
        {
            if(j % 2 == 0)
                checkboard_color = "black";
            else
                checkboard_color = "white";
        }
        else{
            if(j % 2 == 0)
                checkboard_color = "white";
            else
                checkboard_color = "black";
        }
        var cell = document.getElementById('cell_template').innerHTML;
        cell = cell.replace('{cell_class}', checkboard_color);
        strContent += cell;


//            var element = document.createElement('span');
//            element.className = checkboard_color;
//
//            element.addEventListener('click', onClickBoard);
//
//            parent_node.appendChild(element);
    }
    var parent_node = document.getElementById("line_template").innerHTML;
    parent_node = parent_node.replace('{line_class}', 'board_line');
    parent_node = parent_node.replace('{content}', strContent);
    board.innerHTML += parent_node;
}
addClickEvent();