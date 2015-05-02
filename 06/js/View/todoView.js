/**
 * Created by ghost9087 on 15. 5. 2..
 */
var todoView = {
    todoViewTemplate : '',
    todoContainer : null,
    deleteButtonListener : null,
    init : function(){
        this.todoViewTemplate = $('#todoTemplate').html();
        this.todoContainer = $('#todoList');
    },
    render : function(todoList){
        var todoListView = tmpl(this.todoViewTemplate, {todoList: todoList});
        this.todoContainer.html(todoListView);
        this.todoContainer.find('li>button.delete').on('click', this.deleteButtonListener);
    },
    setDeleteButtonListener : function(listener){
        this.deleteButtonListener = listener;
    }
};
