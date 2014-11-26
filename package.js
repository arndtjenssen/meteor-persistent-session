Package.describe({
  name: "aj:persistent-session",
  version: "0.2.1",
  summary: "Persistently store Session data on the client",
  git: "https://github.com/arndtjenssen/meteor-persistent-session"
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.1'),
  api.use(['jquery', 'amplify', 'session', 'underscore']);
  api.export("PersistentSession");
  api.addFiles('lib/persistent_session.js', 'client');
});
