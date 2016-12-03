let setEnvironmentVariables = () => {
  if ( Meteor.settings.private ) {
    process.env.MAIL_URL = "smtp://app57936250@heroku.com:gp6truws8022@smtp.sendgrid.net:587";//Meteor.settings.private.MAIL_URL;
  }
};

Modules.server.setEnvironmentVariables = setEnvironmentVariables;
