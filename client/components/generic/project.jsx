Project = React.createClass({
  getProjectName() {
    let project = this.props.project;

    if ( this.props.fullView ) {
      return <h3>{ project.name }</h3>;
    } else {
      return <h3><a href={ `/portfolio/${ project._id }`}>{ project.name }</a></h3>;
    }
  },
  getHTML( markdown ) {
    if ( markdown ) {
      return { __html: parseMarkdown( markdown ) };
    }
  },
  renderTags( tags ) {
    if ( tags ) {
      return <div className="tags">
        { tags.map( ( tag ) => {
          return <a className="tag" href={ `/tags/${ tag }` }>#{ tag }</a>;
        })}
      </div>;
    }
  },
  getImages( images ) {
    if ( this.props.fullView ) {

    }
  },
  render() {
    let { formatLastUpdate } = ReactHelpers,
        project              = this.props.project;

    return <div className="project">
      { this.getProjectName() }
      <p><strong>Project Date:</strong> { formatLastUpdate( project.projectDate ) }</p>
      { this.renderTags( project.tags ) }
      <div className="project-body" dangerouslySetInnerHTML={ this.getHTML( project.description ) } >
        { this.getImages( project.images ) }
      </div>
    </div>;
  }
});
