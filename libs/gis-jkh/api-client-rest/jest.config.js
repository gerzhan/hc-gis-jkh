module.exports = {
  name: 'gis-jkh-api-client-rest',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/gis-jkh/api-client-rest',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
