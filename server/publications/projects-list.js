Meteor.publish( 'projectsList', function() {
  return Projects.find();
});
