Login = React.createClass({
  validations() {
    let component = this;

    return {
      rules: {
        emailAddress: {
          required: true,
          email: true
        },
        password: {
          required: true
        }
      },
      messages: {
        emailAddress: {
          required: 'You need to specify an email address.',
          email: 'Is this email address legit?'
        },
        password: {
          required: 'You need to enter a password.'
        }
      },
      submitHandler() {
        let { getValue } = ReactHelpers;

        let form     = component.refs.loginForm.refs.form,
            email    = getValue( form, '[name="emailAddress"]' ),
            password = getValue( form, '[name="password"]' );

        Meteor.loginWithPassword( email, password, ( error ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'Logged in!', 'success' );
          }
        });
      }
    };
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    let passwordLabelLink = {
      href: '/recover-password',
      label: 'Forgot Your Password?'
    };

    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
        <PageHeader size="h4" label="Log In" />
        <Form ref="loginForm" id="login" className="login" validations={ this.validations() } onSubmit={ this.handleSubmit }>
          <FormGroup>
            <EmailInput ref="emailAddress" showLabel={ true } />
          </FormGroup>
          <FormGroup>
            <PasswordInput ref="password" showLabel={ true } labelLink={ passwordLabelLink } />
          </FormGroup>
          <FormGroup>
            <SuccessButton type="submit" label="Login" />
          </FormGroup>
        </Form>
      </GridColumn>
    </GridRow>;
  }
});
