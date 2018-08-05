Package.describe({
  name: 'clinical:desktop-publish',
  version: '2.0.1',
  summary: 'Desktop publication rules for FHIR resources and logged in users (i.e. clinicians)',
  git: 'https://github.com/clinical-meteor/desktop-publish',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('mongo');
  api.use('ddp-rate-limiter@1.0.7');
  api.use('underscore');
  api.use('aldeed:simple-schema@1.3.3');
  api.use('aldeed:collection2@2.5.0');
  api.use('ecmascript@0.9.0');

  // api.use('clinical:hl7-resource-subscription@3.3.6');

  api.addFiles('autopublish.js', ['client', 'server']);
  api.addFiles('security.js', ['client', 'server']);

  api.addFiles('lib/PublishingHouse.js');

  api.export('PublishingHouse')
});
