Accounts.emailTemplates.resetPassword.siteName = () => "Chris Trott";
Accounts.emailTemplates.resetPassword.from     = () => "Chris Trott <admin@christrott.com.au>";
Accounts.emailTemplates.resetPassword.subject  = () => "[christrott] Reset Your Password";

Accounts.emailTemplates.resetPassword.text = ( user, url ) => {
  let emailAddress   = user.emails[0].address,
      urlWithoutHash = url.replace( '#/', '' ),
      supportEmail   = "support@christrott.com.au",
      emailBody      = `A password reset has been requested for the account related to this address (${emailAddress}). To reset the password, visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this reset, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

  return emailBody;
};
