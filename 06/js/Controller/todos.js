//start...

//개발자도구에서 메세지확인
console.log('todos.js');
var todoStringField;
(function($, global){
    // id가 todoString 인 element 가져오기
    todoStringField = $('#todoString');

    //키코드 검사를 따로 하지 않기 위해 form이벤트 오버라이딩
    var form = $('.new-task:first');
    form.on('submit', addTodo);

    $(document.body).on('onCollectionChange', onTodoChanged);

    todoView.init();
    todoView.setDeleteButtonListener(remove);

    Storage.loadData();
})(jQuery, window);