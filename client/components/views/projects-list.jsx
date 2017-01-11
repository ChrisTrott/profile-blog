ProjectsList = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'projectsList' );

    return {
      projects: Projects.find().fetch().map( ( project ) => {
        return { uid: project._id, href: `/projects/${ project._id }/edit`, label: project.name };
      })
    };
  },
  handleNewProject() {
    Meteor.call( 'newProject', ( error, projectId ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( `/projects/${ projectId }/edit` );
        Bert.alert( 'Project Created!', 'success' );
      }
    });
  },
  renderProjectsList() {
    if ( this.data.projects.length > 0 ) {
      return <ListGroup linked={ true } items={ this.data.projects } />;
    } else {
      return <WarningAlert>No projects found.</WarningAlert>;
    }
  },
  render() {
    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <SuccessButton type="button" label="New Project" onClick={ this.handleNewProject } />
        <PageHeader size="h4" label="Project" />
        { this.renderProjectsList() }
      </GridColumn>
    </GridRow>;
  }
});
