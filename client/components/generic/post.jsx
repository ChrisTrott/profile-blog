var ReactDisqusThread = require('react-disqus-thread');

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
          return <a key={ tag } className="tag" href={ `/tags/${ tag }` }>{ tag }</a>;
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
      if(post.slug != null) {
        console.log(post.slug);
        return (
          <div className="post-content">
            <div className="post-body" dangerouslySetInnerHTML={ this.getHTML( post.content ) } />;
            <div className="post-comments">
              <ReactDisqusThread
                shortname={ post.slug }
                identifier={ post.slug }
                title={ post.title }
                url={ `https://www.christrott.com.au/blog/${post.slug}` }
                />
            </div>
          </div>
        );
      } else {
        return (<div className="post-content"></div>);
      }
    }
  },
  render() {
    let { formatLastUpdate } = ReactHelpers,
        post                 = this.props.post,
        displayMode          = this.props.displayMode;

    return <div className="post panel panel-primary">
      <div className="panel-body">
        <div className="post-head-info">
          <span className="post-date">{ formatLastUpdate( post.updated ) }</span>
          { this.getPostTitle() }
          <span className="post-author"> by { post.author }</span>
          { this.renderTags( post.tags ) }
        </div>
        { this.renderPostContent(displayMode, post) }
      </div>
    </div>;
  }
});
