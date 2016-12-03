PublicNavigation = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    return {
      items: {
        right: [
          /*{
            uid: 'login', href: '/login', class: 'fa fa-login', label: ''
          },
          {
            uid: 'facebook', href: 'https://facebook.com/christrott86', class: 'fa fa-facebook', label: ''
          },*/
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
            uid: 'github', href: 'https://github.com/VioKyma', class: 'fa fa-github', label: ''
          }
        ]
      }
    };
  },
  render() {
    return <div className="public-navigation">
      <NavBarNav position={ `navbar-right` } items={ this.data.items.right } />
    </div>;
  }
});
