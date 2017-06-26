const mqtt = require('mqtt');
const db = require('../models/db');

const client = mqtt.connect(
  'mqtt://176.107.182.54:1883',
  //'mqtt://127.0.0.1:1883',
  {
    clientId: 'test2',
    clean: false,
    username: 'admin',
    password: 'password'
  }
);
//console.log(client)
var counter = 0;
client.on('messag0e', function(topic, message) {
  db.testDocumentInsert({ message: message.toString() })
    .then(() => console.log(++counter), err => console.log(err));
});

client.subscribe('test3', { qos: 0 });
