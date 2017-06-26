const Database = require('arangojs').Database;
const db = new Database({
  url: 'http://root:password@127.0.0.1:8529',
  databaseName: 'test',
});
const test = db.collection('test');

exports.testDocumentInsert = function(doc) {
  //return Promise.resolve();
  //return test.save(doc);
  //return mdb.collection('test').insert(doc);
  return odb.insert().into('Test').set({message: doc.message}).one().catch(function(err){console.log(err);});
};

var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/test';

// Use connect method to connect to the server
/*var mdb;
MongoClient.connect(url, {
  database: 'test',
  host: 'localhost',
  options: {
    db: {
      w: 1,
      wtimeout: 60000,
    },
    server: {
      poolSize: 1000,
      reconnectTries: 999999999,
      reconnectInterval: 1000,
      socketOptions: {
        autoReconnect: true,
        // keepAlive: 60000,
        connectTimeoutMS: 0,
        socketTimeoutMS: 0,
      }

    }
  }
}, function(err, ref) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  mdb = ref;
});*/


var OrientDB = require('orientjs');

var server = OrientDB({
  host: 'localhost',
  port: 2424,
  username: 'admin',
  password: 'admin'
});

var odb = server.use({
  name: 'GratefulDeadConcerts',
  username: 'root',
  password: 'password'
})

var k = 0;
function tect() {
  if (k++ > 1000) return;
  for (var i = 0; i < 1000; i++) {
    var arr = [];
    var item = odb.insert().into('Test').set({message: 'Харьков'}).one().catch(function(err){console.log(err);});
    arr.push(item);
  }
  return Promise.all(arr).then(
    () => tect()
  );
}

tect()
console.log(odb);
