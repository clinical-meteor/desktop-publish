Package.describe({
  name: 'clinical:desktop-publish',
  version: '2.2.1',
  summary: 'Desktop publication rules for FHIR resources and logged in users (i.e. clinicians)',
  git: 'https://github.com/clinical-meteor/desktop-publish',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('mongo');
  api.use('ecmascript@0.9.0');
  
  api.use('ddp-rate-limiter@1.0.7');
  api.use('underscore');

  api.use('aldeed:collection2@3.0.0');
  api.use('ecmascript@0.9.0');

  api.addFiles('autopublish.js', ['client', 'server']);
  api.addFiles('security.js', ['client', 'server']);

  // api.use('clinical:hl7-resource-consent@3.4.3');

  api.addFiles('lib/PublishingHouse.js');

  api.export('PublishingHouse')

  // api.export('Consents');
});

Npm.depends({
  "simpl-schema": "1.5.3"
})