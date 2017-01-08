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
  render() {
    let { formatLastUpdate } = ReactHelpers,
        post                 = this.props.post;

    return <div className="post panel panel-primary">
      { this.getPostTitle() }
      <div className="panel-body">
        <span className="post-date">{ formatLastUpdate( post.updated ) }</span><span className="post-author"> by { post.author }</span>
        { this.renderTags( post.tags ) }
        <div className="post-body" dangerouslySetInnerHTML={ this.getHTML( post.content ) } />
      </div>
    </div>;
  }
});
