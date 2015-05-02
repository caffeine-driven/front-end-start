/**
 * Created by ghost9087 on 15. 5. 2..
 */
var TodoCollection = {
    todoList : [],
    add : function(todo){

        if(todo.id == null || todo.id ==''){
            todo.id = new Date().getTime().toString();
        }// End of if statement

        this.todoList.push(todo);
        $(document.body).trigger('onCollectionChange');
    },
    remove : function(todo){

        for(var i in this.todoList){

            if(this.todoList[i].id == todo){
                this.todoList.splice(i,1);
                $(document.body).trigger('onCollectionChange');
                break;
            }// End of if statement

        }// End of for loop
    },
    setList : function(newList){
        this.todoList = newList;
        $(document.body).trigger('onCollectionChange');
    },
    getList : function(){
        return this.todoList;
    }
};