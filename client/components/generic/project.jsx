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
          return <a className="tag" key={ tag } href={ `/portfolio/tags/${ tag }` }>{ tag }</a>;
        })}
      </div>;
    }
  },
  getImages( project ) {
    if ( project.images.length > 0 ) {
      if ( this.props.fullView ) {
        return project.images.map( ( image ) => {
          if (image) {
            var smallImage = image.replace("/upload/","/upload/c_scale,w_150/");
            return <a href={ image } key={ image } data-lightbox={ project.slug }>
              <img src={ smallImage } />
            </a>;
          }
        });
      }
    }
    else {
      return <WarningAlert>No images found for this project.</WarningAlert>;
    }
  },
  render() {
    let { formatLastUpdate } = ReactHelpers,
        project              = this.props.project;

    return <div className="project" key={ project.slug }>
        { this.getProjectName( project ) }
        <div className="project-body" >
          <span className="project-date">Project Date: { formatLastUpdate( project.projectDate ) }</span>
          <div className="tags">{ this.renderTags( project.tags ) }</div>
          <div className="description" dangerouslySetInnerHTML={ this.getHTML( project.description ) }></div>
          <div className="images">{ this.getImages( project ) }</div>
        </div>
      </div>;
  }
});
