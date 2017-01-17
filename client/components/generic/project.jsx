Project = React.createClass({
  getProjectName( project ) {
    if ( this.props.fullView ) {
      return <h4>{ project.name }</h4>;
    } else {
      return <h4><a href={ `/portfolio/${ project.slug }`}>{ project.name }</a></h4>;
    }
  },
  getHTML( description ) {
    if ( description ) {
      return { __html: parseMarkdown( description ) };
    }
  },
  renderTags( tags ) {
    if ( tags ) {
      return <div className="tags">
        { tags.map( ( tag ) => {
          return <a className="tag" href={ `/portfolio/tags/${ tag }` }>{ tag }</a>;
        })}
      </div>;
    }
  },
  getImages( images ) {
    if ( images.length > 0 ) {
      if ( this.props.fullView ) {
        return images.map( ( image ) => {
          return <img width="150" height="150" src={ image } />;
        });
      }
      else {
        return <img src={ images[0] } />;
      }
    }
    else {
      return <WarningAlert>No images found for this project.</WarningAlert>;
    }
  },
  render() {
    let { formatLastUpdate } = ReactHelpers,
        project              = this.props.project;

    return <div className="project">
        { this.getProjectName( project ) }
        <div className="project-body" >
          Project Date: { formatLastUpdate( project.projectDate ) }
          { this.renderTags( project.tags ) }
          { this.getImages( project.images ) }
        </div>
      </div>
  }
});
