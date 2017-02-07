ProjectEditor = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'project-editor', this.props.project );

    return {
      project: Projects.findOne( { _id: this.props.project } )
    };
  },
  validations() {
    let component = this;

    return {
      rules: {
        projectName: {
          required: true
        }
      },
      messages: {
        projectName: {
          required: "Hold up, a project title is required!"
        }
      },
      submitHandler() {
        let { getValue, isChecked } = ReactHelpers;

        let form = component.refs.editProjectForm.refs.form,
            project = {
              _id: component.props.project,
              published: isChecked( form, '[name="projectPublished"]' ),
              featured: isChecked( form, '[name="projectFeatured"]' ),
              projectDate: getValue( form, '[name="projectDate"]'),
              name: getValue( form, '[name="projectName"]'),
              slug: getValue( form, '[name="projectSlug"]' ),
              description: getValue( form, '[name="projectDescription"]' ),
              tags: getValue( form, '[name="projectTags"]' ).split( ',' ).map( ( string ) => {
                return string.trim();
              }),
              images: getValue( form, '[name="projectImages"]' ).split( ',' ).map( ( string ) => {
                if ( string.trim() ) {
                  return string.trim();
                }
              })
            };

        Meteor.call( 'saveProject', project, ( error, response ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'Project saved!', 'success' );
          }
        });
      }
    };
  },
  generateSlug( event ) {
    let { setValue } = ReactHelpers,
        form         = this.refs.editProjectForm.refs.form,
        title        = event.target.value;

    setValue( form, '[name="projectSlug"]', getSlug( title, { custom: { "'": "" } } ) );
  },
  getLastUpdate() {
    if ( this.data ) {
      let { formatLastUpdate } = ReactHelpers,
          project                 = this.data.project;

      return `${ formatLastUpdate( project.updated ) } by ${ project.author }`;
    }
  },
  getTags() {
    let project = this.data.project;

    if ( project && project.tags ) {
      return project.tags.join( ', ' );
    }
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    if ( !this.data.project ) { return <div />; }

    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <PageHeader size="h4" label="Edit Project" />
        <Form ref="editProjectForm" id="edit-project" className="edit-project" validations={ this.validations() } onSubmit={ this.handleSubmit }>
          <p className="updated-date">
            <strong>Last Updated:</strong> { this.getLastUpdate() }
          </p>
          <FormGroup>
            <FormControl
              style="checkbox"
              name="projectPublished"
              id="#project-published"
              label="Published?"
              defaultValue={ this.data.project && this.data.project.published }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              style="checkbox"
              name="projectFeatured"
              id="#project-featured"
              label="Featured?"
              defaultValue={ this.data.project && this.data.project.featured }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ true }
              style="input"
              type="text"
              name="projectName"
              label="Project Name"
              onChange={ this.generateSlug }
              defaultValue={ this.data.project && this.data.project.name }
            />
            <FormControl
              disabled={ true }
              showLabel={ false }
              style="input"
              type="text"
              name="projectSlug"
              label="Slug"
              defaultValue={ this.data.project && this.data.project.slug }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ true }
              style="input"
              type="dateTime"
              name="projectDate"
              label="Project Date"
              defaultValue={ this.data.project && this.data.project.projectDate }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="textarea"
              name="projectDescription"
              label="Description"
              defaultValue={ this.data.project && this.data.project.description }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="input"
              type="text"
              name="projectTags"
              label="Tags"
              defaultValue={ this.getTags() }
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              showLabel={ false }
              style="textarea"
              name="projectImages"
              label="Image Links"
              defaultValue={ this.data.project && this.data.project.images }
            />
          </FormGroup>
          <FormGroup>
            <SuccessButton type="submit" label="Save Project" />
          </FormGroup>
        </Form>
      </GridColumn>
    </GridRow>;
  }
});
