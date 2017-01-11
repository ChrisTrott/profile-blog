const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated'
});

authenticatedRoutes.route( '/posts', {
  name: 'posts',
  action() {
    ReactLayout.render( App, { yield: <PostsList /> } );
  }
});

authenticatedRoutes.route( '/posts/:_id/edit', {
  name: 'editor',
  action( params ) {
    ReactLayout.render( App, { yield: <Editor post={ params._id } /> } );
  }
});

authenticatedRoutes.route( '/projects', {
  name: 'projects',
  action() {
    ReactLayout.render( App, { yield: <ProjectsList /> } );
  }
});

authenticatedRoutes.route( '/projects/:_id/edit', {
  name: 'project-editor',
  action( params ) {
    ReactLayout.render( App, { yield: <ProjectEditor project={ params._id } /> } );
  }
});
