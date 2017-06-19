const mqtt = require('mqtt');
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
client.on('message', function(topic, message){
  console.log(++counter);
  console.log(topic)
  console.log(message.toString())
})
client.subscribe('test1');
