const mqtt = require('mqtt');
const client = mqtt.connect(
  'mqtt://176.107.182.54:1883',
  //'mqtt://127.0.0.1:1883',
  {
    clientId: 'test1',
    clean: false,
    username: 'admin',
    password: 'password'
  }
);
var counter = 0;
for (var i = 0; i < 100000; i++)
void function() {
  var counter1 = ++counter;
  client.publish('test3', 'message - ' + (counter1),{qos: 0}, function(err) {
    console.log(counter1)
    console.log(counter)
    if (err) console.log(err)
  });
}();
