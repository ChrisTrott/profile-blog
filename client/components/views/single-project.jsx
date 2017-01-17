SingleProject = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let sub = Meteor.subscribe( 'project', this.props.slug );

    return {
      project: Projects.findOne( { slug: this.props.slug } ),
      ready: sub.ready()
    };
  },
  render() {
    if (!this.data) { return <div />; }
    return <GridRow>
      <GridColumn>
        <Project fullView='true' project={ this.data.ready && this.data && this.data.project } />
      </GridColumn>
    </GridRow>
  }
});
