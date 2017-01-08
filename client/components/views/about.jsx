About = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {}
  },
  renderAbout() {
    return "Hi, I'm  Chris Trott. I'm a web developer with experience as a Front End and Full Stack Developer, specifically working with Web Apps." +
      "I mostly work with JavaScript and C#, and my most recent experience has been in the Node.js environment. " +
      "I have special knowledge in SharePoint and have managed and developed a number of moderate to large farms for corporate environments." +
      "I build software with precision and integrity, and pride myself on my attention to detail. " +
      "In my spare time, I try out new technology and build small games in Unity. " +
      "I live with my wife and 3 kids in Melbourne, Victoria. When I'm not experimenting and creating with tech, I'm out enjoying time with the family and soaking up the awesome Melbourne culture. "
  },
  render() {
    return <div className="about">
      <GridRow>
        <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
          <PageHeader size="h4" label="About Me" />
            { this.renderAbout() }
        </GridColumn>
      </GridRow>
    </div>
  }
});
