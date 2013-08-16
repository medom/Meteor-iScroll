Package.describe({
  summary: "Make the world iscroll"
});

Package.on_use(function (api) {
  api.add_files(['iscroll.js'], 'client');

  api.export && api.export('IScroll', 'client');
});
