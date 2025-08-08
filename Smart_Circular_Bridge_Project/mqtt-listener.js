const Max = require('max-api');
const mqtt = require('mqtt');

var client;

const options = {
  host: '192.168.4.20',
  port: 1883,
  username: '24sea',
  password: '74836',
  maxPacketSize: 1000000,
};

url = 'mqtt://192.168.4.20';

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
	  const strainValues = json.strain_values
      const sensor = 'strain'+json.index_channel// Max.post(topic, json);
      Max.outlet([sensor,...strainValues]);

    });


  });

  client.on('error', (err) => {
    Max.outlet(err);
    console.error(err);
  });
});

Max.addHandler('subscribe', (topic) => {

});
