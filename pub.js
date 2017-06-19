const mqtt = require('mqtt');
const client = mqtt.connect(
  'mqtt://localhost:1883',
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
  client.publish('test1', 'message - ' + (counter1),{qos: 2}, function(err) {
    console.log(counter1)
    if (err) console.log(err)
  });
}();
