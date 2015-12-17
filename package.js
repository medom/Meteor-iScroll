Package.describe({
  git: 'https://github.com/medom/Meteor-iScroll-zoom.git',
  name: 'mxe:iscroll-zoom',
  version: '0.0.4',
  summary: "Make the world iscroll"
});

Package.onUse(function (api) {
  api.addFiles(['iscroll-zoom.js'], 'client');

  api.export && api.export('IScroll', 'client');
});
