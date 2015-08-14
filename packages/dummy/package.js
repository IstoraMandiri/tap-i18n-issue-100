Package.describe({
  name: "dummy:package",
  summary: "Package to test bugs",
  version: '0.1.0'
});

Package.on_use(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use([
    'templating',
    'coffeescript',
    'tap:i18n@1.5.1',
  ], ['client', 'server']);

  api.add_files("package-tap.i18n", ["client", "server"]);

  api.add_files([
    'dummy-package.html',
    'dummy-package.coffee'
  ], ['client']);

  api.add_files(["i18n/en.i18n.json"], ["client", "server"]);

});