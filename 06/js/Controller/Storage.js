/**
 * Created by ghost9087 on 15. 5. 2..
 */

var Storage = {
    loadData : function() {
        console.log('loadData()');
        TodoCollection.setList(JSON.parse(localStorage.getItem('todo') || "[]"));
    },
    saveData : function (todoList) {
        console.log('saveData()');
        localStorage.setItem('todo', JSON.stringify(todoList));
    }
};