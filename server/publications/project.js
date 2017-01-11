Meteor.publish( 'project', ( projectSlug ) => {
  check( projectSlug, String );

  return Projects.find( { slug: projectSlug } );
});
