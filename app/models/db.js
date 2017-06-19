const Database = require('arangojs').Database;
const db = new Database({
  url: 'http://root:password@127.0.0.1:8529',
  databaseName: 'test',
});
const test = db.collection('test');

exports.testDocumentInsert = function(doc) {
  return test.save(doc);
};
