Meteor.publish( 'projectsIndex', function() {
  return Projects.find( { published: true } );
});

Meteor.publish( 'projectsTagIndex', function( tag ) {
  check( tag, String );
  return Projects.find( { published: true, tags: { $in: [ tag ] } } );
});
