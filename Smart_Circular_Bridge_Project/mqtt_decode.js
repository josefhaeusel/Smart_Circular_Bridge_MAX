// Import required libraries
const mqtt = require('mqtt');
const protobuf = require('protobufjs');
const path = require('path');

// MQTT Broker details
const options = {
  host: '10.102.8.250',
  port: 1883,
  username: '24sea',
  password: '74836',
  maxPacketSize: 100000000000,
};

const url = 'mqtt://10.102.8.250';
const topic = 'spBv1___0/dewesoftx/DDATA/plugin/dewesoftX';

// Path to the Sparkplug B proto file
const protoFilePath = path.join(__dirname, 'sparkplug_b.proto');  // Place the proto file in the same directory as this script

// Function to load the protobuf schema from the .proto file
const loadProtoFile = () => {
  return new Promise((resolve, reject) => {
    protobuf.load(protoFilePath, (err, root) => {
      if (err) {
        return reject(err);
      }
      const Payload = root.lookupType('org.eclipse.tahu.protobuf.Payload');
      resolve(Payload);
    });
  });
};

// Function to decode the protobuf message
const decodeMessage = (Payload, bufferMessage) => {
  try {
    const decodedMessage = Payload.decode(bufferMessage);
    return decodedMessage;
  } catch (err) {
    throw new Error('Failed to decode message: ' + err.message);
  }
};

// Function to connect to MQTT and subscribe
const connectMqtt = async () => {
  const client = mqtt.connect(url, options);

  client.on('connect', () => {
    console.log('Connected to MQTT broker');
    client.subscribe(topic, (err) => {
      if (err) {
        console.error('Error subscribing to topic:', err);
      } else {
        console.log('Subscribed to topic:', topic);
      }
    });
  });

  // When a message is received
  client.on('message', async (topic, payload) => {
    console.log('Received message on topic:', topic, payload);

    try {
      // Load the protobuf schema
      const Payload = await loadProtoFile();

      // Decode the received message
      const decodedMessage = decodeMessage(Payload, payload);
      console.log('Decoded message:', decodedMessage);
      console.log('JSON message:', decodedMessage.metrics[0].datasetValue.rows[0].elements);

    } catch (err) {
      console.error('Error processing message:', err);
    }
  });

  client.on('error', (err) => {
    console.error('MQTT Client Error:', err);
  });
};

// Run the script
connectMqtt().catch((err) => {
  console.error('Error connecting to MQTT:', err);
});
