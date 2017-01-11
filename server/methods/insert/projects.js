Meteor.methods({
  newProject() {
    return Projects.insert( {} );
  }
});
