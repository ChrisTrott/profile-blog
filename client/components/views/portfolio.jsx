Portfolio = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let query = {};
    if ( this.props.tag ) {
      Meteor.subscribe( 'projectsTagIndex', this.props.tag );
      query = { tags: { $in: [ this.props.tag ] } };
    }
    else {
      Meteor.subscribe( 'projectsIndex' );
    }

    return {
      projects: Projects.find( query, { sort: { projectDate: -1 } } ).fetch()
    };
  },
  renderProjects() {
    if ( this.data.projects.length > 0 ) {
      return this.data.projects.map( ( project ) => {
        return <Project key={ project._id } project={ project } fullView='false' />;
      });
    } else {
      return <WarningAlert>No projects posted yet! Check back soon.</WarningAlert>;
    }
  },
  render() {
    return <div className="portfolio">
      <GridRow>
        <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
          <PageHeader size="h4" label="Portfolio" />
          { this.renderProjects() }
        </GridColumn>
      </GridRow>
    </div>
  }
});
