PublicNavigation = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    return {
      items: {
        right: [
          {
            uid: 'twitter', href: 'https://twitter.com/VioKyma', class: 'fa fa-twitter', label: ''
          },
          {
            uid: 'linkedin', href: 'https://www.linkedin.com/in/christopher-trott-39345119', class: 'fa fa-linkedin', label: ''
          },
          {
            uid: 'stackoverflow', href: 'https://stackoverflow.com/users/1881027/viokyma', class: 'fa fa-stack-overflow', label: ''
          },
          {
            uid: 'github', href: 'https://github.com/ChrisTrott', class: 'fa fa-github', label: ''
          }
        ],
        left: [
          {
            uid: 'blog', href: '/blog', class: '', label: 'Blog'
          },
          {
            uid: 'portfolio', href: '/portfolio', class: '', label: 'Portfolio'
          },
          {
            uid: 'about', href: '/about', class: '', label: 'About Me'
          }
        ]
      }
    };
  },
  render() {
    return <div className="public-navigation">
      <NavBarNav position={ `navbar-left` } items={ this.data.items.left } />
      <NavBarNav position={ `navbar-right` } items={ this.data.items.right } />
    </div>;
  }
});
