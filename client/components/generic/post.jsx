Post = React.createClass({
  getPostTitle() {
    let post = this.props.post;

    if ( this.props.singlePost ) {
      return <div className="panel-heading"><h3>{ post.title }</h3></div>;
    } else {
      return <div className="panel-heading"><h3><a href={ `/blog/${ post.slug }`}>{ post.title }</a></h3></div>;
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
          return <a className="tag" href={ `/tags/${ tag }` }>{ tag }</a>;
        })}
      </div>;
    }
  },
  renderPostContent(displayMode, post) {
    if (displayMode == "preview") {
      return (
        <div className="post-preview">
          <div className="post-body" dangerouslySetInnerHTML={ this.getHTML( post.preview ) } />
          <div className="post-preview-link"><a href={`/blog/${post.slug}`}>Read More...</a></div>
        </div>
      );
    } else {
      return <div className="post-body" dangerouslySetInnerHTML={ this.getHTML( post.content ) } />;
    }
  },
  render() {
    let { formatLastUpdate } = ReactHelpers,
        post                 = this.props.post,
        displayMode          = this.props.displayMode;

    return <div className="post panel panel-primary">
      { this.getPostTitle() }
      <div className="panel-body">
        <span className="post-date">{ formatLastUpdate( post.updated ) }</span><span className="post-author"> by { post.author }</span>
        { this.renderTags( post.tags ) }
        { this.renderPostContent(displayMode, post) }
      </div>
    </div>;
  }
});
