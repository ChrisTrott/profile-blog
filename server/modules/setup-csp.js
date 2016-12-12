let setupCSP = () => {
  BrowserPolicy.framing.disallow();
  //BrowserPolicy.content.disallowInlineScripts();
  BrowserPolicy.content.disallowEval();
  BrowserPolicy.content.allowInlineStyles();
  BrowserPolicy.content.allowFontDataUrl();

  var trusted = [
    // Fonts
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    // Analytics
    '*.google-analytics.com',
    '*.mxpnl.com',
  ];

  _.each(trusted, function(origin) {
    origin = "https://" + origin;
    BrowserPolicy.content.allowOriginForAll(origin);
  });
};

Modules.server.setupCSP = setupCSP;
