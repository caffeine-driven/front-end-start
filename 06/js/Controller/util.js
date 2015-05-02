function addTodo(event) {
    event.preventDefault();

    var title = todoStringField.val();
    todoStringField.val("");

    if (title == "" || title == null)
        return;


    var newTodo = $.extend({}, Todo.model, {
        title: title
    });
    TodoCollection.add(newTodo);
}
function remove(event) {
    if(!confirm('정말삭제하시겠습니까?')){
      return;
    }

    var id = $(event.target.parentElement).data('id');

    TodoCollection.remove(id);
}
function onTodoChanged(){
    var todoList = TodoCollection.getList();

    todoView.render(todoList);

    Storage.saveData(todoList);
}

