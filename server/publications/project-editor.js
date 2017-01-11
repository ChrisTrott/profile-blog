Meteor.publish( 'project-editor', ( projectId ) => {
  check( projectId, String );

  return [
    Projects.find( { _id: projectId } ),
    Meteor.users.find( {}, { fields: { profile: 1 } } )
  ];
});
