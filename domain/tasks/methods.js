Meteor.methods({
  createTask: function(text) {
    Tasks.insert({
      text: text,
      createdAt: new Date()
    });
  },
  toggleTask: function(_id, checked) {
    Tasks.update(_id, {$set: {checked: checked}});
  },
  deleteTask: function(_id) {
    Tasks.remove(_id);
  }
});