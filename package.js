Package.describe({
  name: 'manuel:isdev',
  version: '1.0.0',
  summary: 'Meteor.isDev in dev mode',
  git: 'https://github.com/ManuelDeLeon/isDev',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.addFiles('dev.js');
});
