App = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    return {
      loggingIn: Meteor.loggingIn(),
      hasUser: !!Meteor.user(),
      isPublic( route ) {
        return [
          'index',
          'about',
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
          <h2>Chris Trott</h2>
          <h4>I'm the Product Manager at a SaaS company where I manage,
            develop, deploy, and maintain web applications.</h4>
          <h4>
            I enjoy teaching people about technology, and love producing
            beautiful software that improves people's lives.
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
