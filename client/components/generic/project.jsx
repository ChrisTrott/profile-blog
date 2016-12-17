Project = React.createClass({
  getProjectTitle() {
    let project = this.props.project;

    if ( this.props.fullView ) {
      return <h3>{ project.title }</h3>;
    } else {
      return <h3><a href={ `/portfolio/${ project._id }`}>{ project.title }</a></h3>;
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
        {tags.map( ( tag ) => {
          return <a className="tag" href={ `/tags/${ tag }` }>#{ tag }</a>;
        })}
      </div>;
    }
  },
  render() {
    let { formatLastUpdate } = ReactHelpers,
        project              = this.props.project;

    return <div className="project">
      { this.getProjectTitle() }
      <p><strong>Project Date:</strong> { formatLastUpdate( project.projectDate ) }</p>
      { this.renderTags( project.tags ) }
      //<div className="project-body" dangerouslySetInnerHTML={ this.getHTML( project.images ) } />
    </div>;
  }
});
