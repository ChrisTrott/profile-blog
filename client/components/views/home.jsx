Home = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'postsFeatured' );
    Meteor.subscribe( 'projectsFeatured' );

    let query = { featured: true };

    return {
      posts: Posts.find( query, { sort: { updated: -1 } } ).fetch(),
      projects: Projects.find( query, { sort: { projectDate: -1 } }).fetch()
    };
  },
  renderBlogFeature() {
    if ( this.data.posts.length > 0 ) {
      return this.data.posts.map( ( post ) => {
        return <Post key={ post._id } post={ post } displayMode="preview" />;
      });
    } else {
      return <WarningAlert>No featured blog posts.</WarningAlert>;
    }
  },
  renderPortfolioFeature() {
    if ( this.data.projects.length > 0 ) {
      return this.data.projects.map( ( project ) => {
        return <Project key={ project._id } project={ project } fullView='false' />;
      });
    } else {
      return <WarningAlert>No featured projects yet! Check back soon.</WarningAlert>;
    }
  },
  render() {
    return <div className="home">
      <GridRow>
        <GridColumn className="col-md-6">
          { this.renderBlogFeature() }
        </GridColumn>
        <GridColumn className="col-md-6">
          { this.renderPortfolioFeature() }
        </GridColumn>
      </GridRow>
    </div>
  }
});
