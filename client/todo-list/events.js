Template.todoItem.events({
  "click .toggle-checked": function () {
    Meteor.call("toggleTask", this._id, !this.checked);
  },
  "click .delete": function () {
    Meteor.call("deleteTask", this._id, !this.checked);
  }
});

Template.todoForm.events({
  "submit .new-todo": function(e) {
    e.preventDefault();

    var text = event.target.text.value;
    event.target.text = "";

    Meteor.call("createTask", text);
  }
});