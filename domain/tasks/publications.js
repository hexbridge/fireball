if (Meteor.isServer) {
  Meteor.publish('tasks', function() {
    return Tasks.find();
  });
}