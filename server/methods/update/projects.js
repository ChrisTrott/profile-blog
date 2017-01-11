Meteor.methods({
  saveProject( project ) {
    check( project, Object );

    let projectId = project._id;
    delete project._id;

    Projects.upsert( projectId, { $set: project } );
  }
});
