const mqtt = require('mqtt');
const db = require('../models/db');

const client = mqtt.connect(
  'mqtt://localhost:1883',
  {
    clientId: 'test2',
    clean: false,
    username: 'admin',
    password: 'password'
  }
);

var counter = 0;
client.on('message', function(topic, message) {
  db.testDocumentInsert({ message: message.toString() })
    .then(() => console.log(++counter), err => console.log(err));
});

client.unsubscribe('test');
client.subscribe('test1', { qos: 2 });
