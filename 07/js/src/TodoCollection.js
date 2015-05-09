
(function(app, $){

  var data = [];

  app.collection = {
      set: function (arr) {
          data = arr;
          app.$wrap.trigger("addCollection", [data]);
      },
      toJSON: function () {
          return data;
      },
      add: function (todo) {
          data.push(todo);
          app.$wrap.trigger("addCollection", [data]);
      },
      remove: function (id) {
          var indexById = this.getIndexById(id);
          data.slice(indexById, 1);

          app.$wrap.trigger("removeCollection", [data]);
      },
      get: function (id) {
          for (var i = 0; i < data.length; i++) {
              if (data[i].id === id) {
                  return data[i];
              }
          }
          return null;
      },
      update: function (todo) {
          var indexById = this.getIndexById(todo.id);
          data.splice(indexById, 1, todo);

          app.$wrap.trigger("removeCollection", [data]);
      },
      getIndexById : function (id) {
          for (var i = 0; i < data.length; i++) {

              if (data[i].id === id) {
                  console.log('find', i)
                  //data에서  todo를 지워야해
                  return i;
              }
          }
          return -1;
      }
  }

})(Todo, jQuery);
