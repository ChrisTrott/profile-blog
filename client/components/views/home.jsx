Home = new React.createClass({
  getMeteorData() {
    return {}
  },
  renderBlogFeature() {
    <div className="blog-feature">Blog!</div>
  },
  renderPortfolioFeature() {
    <div className="portfolio-feature">Project!</div>
  },
  render() {
    return <div className="home">
      <GridRow>
        <GridColumn>
          { this.renderBlogFeature() }
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          { this.renderPortfolioFeature() }
        </GridColumn>
      </GridRow>
    </div>
  }
});
