Meteor.startup(function() {

  if (Tasks.find().count() === 0) {
    Tasks.insert({ text: "Hello world!", createdAt: new Date() });
    Tasks.insert({ text: "Second task", createdAt: new Date() });
    Tasks.insert({ text: "Yet another one task", createdAt: new Date() });
  }

});