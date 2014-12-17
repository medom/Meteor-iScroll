Package.describe({
  git: 'https://github.com/SpaceCapsule/Meteor-iScroll.git',
  name: 'raix:iscroll',
  version: '0.0.2',
  summary: "Make the world iscroll"
});

Package.onUse(function (api) {
  api.addFiles(['iscroll.js'], 'client');

  api.export && api.export('IScroll', 'client');
});
