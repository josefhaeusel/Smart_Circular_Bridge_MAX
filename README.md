# 🎼 Smart Circular Bridge – MaxMSP Sound Processor

![cover pic](/cover_pic.png)

This repository contains the **MaxMSP patch** that powers the sound layer of the **Smart Circular Bridge** ("Flachsbrücke") installation in Ulm. It receives **MQTT sensor data** from the bridge in real time and transforms it into immersive **4-channel generative audio**.

The resulting audio is output at the bridge and streamed live to [flachsbruecke-ulm.de](https://flachsbruecke-ulm.de).

---

## 🧠 Overview

Pedestrian and environmental activity on the bridge is captured through an array of sensors. This MaxMSP program processes that data, interpreting movement and pressure changes as **musical gestures**. It contributes to the bridge’s concept as a **living instrument** that sonifies human interaction with architecture.

---

## 🎵 Audio Processing Pipeline

```plaintext
[Sensors on bridge]
         ↓
[MQTT Data Stream]
         ↓
[MaxMSP Patch – This Project]
         ↓
[4-Channel Audio Output]
         ↓
[Voicemeeter (Audio Routing Software)]
         ↓
[Multichannel Speaker Setup in Ulm]  [BUTT (Broadcast Using This Tool)]
         ↓
[Live Stream to https://flachsbruecke-ulm.de]
```

---

## 📡 MQTT Integration

This patch subscribes to a set of MQTT topics representing real-time sensor data from the bridge (e.g., force, vibration, acceleration). The data drives modulation parameters in the audio engine such as:

- Triggered sound events
- Instrumental voice changes
- Dynamic filtering and textures

MQTT broker details should be configured within the `[mqtt_client]` subpatch or via a config file depending on your setup.

---

## 🔊 Output Routing

- The audio engine generates **4-channel surround sound**.
- Output is routed to **Voicemeeter** (virtual audio mixer) for:
  - Mixing
  - Channel routing
  - Volume control
- From Voicemeeter, audio is piped to **BUTT (Broadcast Using This Tool)** for live encoding and streaming.

---

## 🛠 Requirements

- [Max/MSP](https://cycling74.com/)
- MQTT externals (e.g., [`mqtt-client`](https://github.com/grahamwakefield/max-mqtt))
- [Voicemeeter Banana / Potato](https://vb-audio.com/Voicemeeter/)
- [BUTT – Broadcast Using This Tool](https://danielnoethen.de/butt/)

---

## 📁 Project Files

```plaintext
Smart_Circular_Bridge_MAX/
├── Smart_Circular_Bridge_Project  # Max Project
   └── MAIN_Patcher.main.maxpat    # Main Patch
├── butt                           # butt config
├── rabbitmq-instruction.txt       # rabbitmq MQTT instructions
├── dsp settings.png               # Screenshot of audio dsp settings
└── README.md                      # You're here
```

---

## 🧑‍🎤 Authorship

Developed by  
- **Josef Häusel** – *Lead Creative Technologist at [KLANGERFINDER GmbH & Co. KG](https://klangerfinder.de)*
- **Alec Dull** – *Creative Technologist at [KLANGERFINDER GmbH & Co. KG](https://klangerfinder.de)*

Project: [flachsbruecke-ulm.de](https://flachsbruecke-ulm.de)  
More about the Smart Circular Bridge:  
[smartcircularbridge.eu](https://www.smartcircularbridge.eu/)

