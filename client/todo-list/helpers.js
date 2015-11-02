Template.todoList.helpers({
  todos: function () {
    return Tasks.find({}, {sort: {createdAt: -1}});
  }
});