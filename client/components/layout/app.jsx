App = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    return {
      loggingIn: Meteor.loggingIn(),
      hasUser: !!Meteor.user(),
      isPublic( route ) {
        return [
          'index',
          'blog',
          'about',
          'portfolio',
          'project',
          'projectTags',
          'singlePost',
          'tagIndex',
          'login',
          'recoverPassword',
          'resetPassword',
          'notFound'
        ].indexOf( route ) > -1;
      },
      canView() {
        return this.isPublic( FlowRouter.getRouteName() ) || !!Meteor.user();
      }
    };
  },
  renderHeader() {
    if ( this.props.tag ) {
      return <Jumbotron className="tags-header">
        <h4>Posts tagged with: { this.props.tag }.</h4>
      </Jumbotron>;
    } else {
      return <Jumbotron className="blog-header">
          <h4>
            I'm a Software Developer focused on the user. I'm experienced with C# and JavaScript.
          </h4>
          <h4>
            In this blog, I write on JavaScript, Web Apps, Games, and how all of those things relate to the people that use them.
          </h4>
      </Jumbotron>;
    }
  },
  getView() {
    return this.data.canView() ? this.props.yield : <Login />;
  },
  render() {
    return <div className="app-root">
      <AppHeader hasUser={ this.data.hasUser } />
      <div className="app-view">
        <div className="banner-head">
          { this.renderHeader() }
        </div>
        <div className="container">
          { this.data.loggingIn ? <Loading /> : this.getView() }
        </div>
      </div>
    </div>;
  }
});
