const Max = require('max-api');
const mqtt = require('mqtt');

var client;

const options = {
  host: '10.102.8.250',
  port: 1883,
  username: '24sea',
  password: '74836',
  maxPacketSize: 1000000,
};

url = 'mqtt://10.102.8.250';

Max.addHandler('connect', (topic) => {
  client = mqtt.connect(url, options);

  client.on('connect', () => {

    client.subscribe(topic, (err) => {
      if (err) {
        Max.outlet('subscribe error', err);
        console.error('Subscribe error:', err);
      } else {
        console.log('Subscribed to topic:', topic);
      }
    });

    client.on('message', (topic, buffer) => {


      const json = JSON.parse(buffer)
      console.log(topic, json);
      // Max.post(topic, json);
      Max.outlet([topic, json]);

    });


  });

  client.on('error', (err) => {
    Max.outlet(err);
    console.error(err);
  });
});

Max.addHandler('subscribe', (topic) => {

});
