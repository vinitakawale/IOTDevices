const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/endpoints/:device_type", (req, res) => {
  res.json([
    {
      _id: {
        $oid: "6396c45965ea33d51505f9ac",
      },
      port: "80/tcp",
      ip: "89.30.121.150",
      security_posture: "UNKNOWN",
      domain_name: "scalews.withings.net",
      location: {
        city: "Paris",
        region: "Île-de-France",
        country: "France",
      },
      device_mac: "00:24:e4:24:80:2a",
    },
    {
      _id: {
        $oid: "6396c45b52082a9ccdb907e7",
      },
      port: "80/tcp",
      ip: "89.30.121.150",
      security_posture: "UNKNOWN",
      domain_name: "scalews.withings.net",
      location: {
        city: "Paris",
        region: "Île-de-France",
        country: "France",
      },
      device_mac: "00:24:e4:24:80:2a",
    },
    {
      _id: {
        $oid: "6396c45d9a8ac83d46e6fbe3",
      },
      port: "80/tcp",
      ip: "89.30.121.150",
      security_posture: "UNKNOWN",
      domain_name: "scalews.withings.net",
      location: {
        city: "Paris",
        region: "Île-de-France",
        country: "France",
      },
      device_mac: "00:24:e4:24:80:2a",
    },
    {
      _id: {
        $oid: "6396c45fc926d90f97a5a334",
      },
      port: "80/tcp",
      ip: "89.30.121.150",
      security_posture: "UNKNOWN",
      domain_name: "scalews.withings.net",
      location: {
        city: "Paris",
        region: "Île-de-France",
        country: "France",
      },
      device_mac: "00:24:e4:24:80:2a",
    },
    {
      _id: "89.30.121.150",
      port: "80/tcp",
      ip: "89.30.121.150",
      security_posture: "UNKNOWN",
      domain_name: "scalews.withings.net",
      location: {
        city: "Paris",
        region: "Île-de-France",
        country: "France",
      },
      device_mac: "00:24:e4:24:80:2a",
    },
  ]);
});

app.get("/devices", (req, res) => {
  res.json([
    {
      _id: "10:27:f5:8a:7b:de",
      ip: "10.42.0.100",
      name: "TPLinkSwitch",
      mac_addr: "10:27:f5:8a:7b:de",
      enabled: true,
    },
    {
      _id: "00:24:e4:24:80:2a",
      ip: "10.10.10.21",
      name: "WithingsBabyCam",
      mac_addr: "00:24:e4:24:80:2a",
      enabled: true,
    },
    {
      _id: "94:10:3e:35:01:c1",
      ip: "10.10.10.252",
      name: "WeMoSwitch",
      mac_addr: "94:10:3e:35:01:c1",
      enabled: true,
    },
    {
      _id: "50:c7:bf:00:c7:03",
      ip: "10.10.10.20",
      name: "TP-LinkPlugHS110",
      mac_addr: "50:c7:bf:00:c7:03",
      enabled: true,
    },
    {
      _id: "00:17:88:24:76:ff",
      ip: "10.10.10.6",
      name: "HueBridge",
      mac_addr: "00:17:88:24:76:ff",
      enabled: true,
    },
    {
      _id: "50:c7:bf:00:fc:a3",
      ip: "10.10.10.228",
      name: "TP-LinkPlugHS100",
      mac_addr: "50:c7:bf:00:fc:a3",
      enabled: true,
    },
    {
      _id: "94:10:3e:42:80:69",
      ip: "10.10.10.124",
      name: "WeMoInsightSwitch2",
      mac_addr: "94:10:3e:42:80:69",
      enabled: true,
    },
    {
      _id: "90:8d:78:dd:0d:60",
      ip: "10.10.10.39",
      name: "D-LinkSiren",
      mac_addr: "90:8d:78:dd:0d:60",
      enabled: true,
    },
    {
      _id: "00:1a:22:03:cb:be",
      ip: "10.10.10.129",
      name: "MAXGateway",
      mac_addr: "00:1a:22:03:cb:be",
      enabled: true,
    },
    {
      _id: "94:10:3e:cd:37:65",
      ip: "10.10.10.144",
      name: "WeMoLink",
      mac_addr: "94:10:3e:cd:37:65",
      enabled: true,
    },
    {
      _id: "94:10:3e:41:c2:05",
      ip: "10.10.10.158",
      name: "WeMoInsightSwitch",
      mac_addr: "94:10:3e:41:c2:05",
      enabled: true,
    },
    {
      _id: "b0:c5:54:25:5b:0e",
      ip: "10.10.10.37",
      name: "D-LinkCam",
      mac_addr: "b0:c5:54:25:5b:0e",
      enabled: true,
    },
    {
      _id: "1c:5f:2b:aa:fd:4e",
      ip: "10.10.10.87",
      name: "D-LinkHomeHub",
      mac_addr: "1c:5f:2b:aa:fd:4e",
      enabled: true,
    },
    {
      _id: "84:18:26:7b:5f:6b",
      ip: "10.10.10.114",
      name: "Lightify",
      mac_addr: "84:18:26:7b:5f:6b",
      enabled: true,
    },
    {
      _id: "74:da:38:4a:76:49",
      ip: "10.10.10.186",
      name: "EdimaxPlug1101W",
      mac_addr: "74:da:38:4a:76:49",
      enabled: true,
    },
    {
      _id: "90:8d:78:a9:3d:6f",
      ip: "10.10.10.176",
      name: "D-LinkSwitch",
      mac_addr: "90:8d:78:a9:3d:6f",
      enabled: true,
    },
    {
      _id: "94:10:3e:34:0c:b5",
      ip: "10.10.10.190",
      name: "WeMoSwitch2",
      mac_addr: "94:10:3e:34:0c:b5",
      enabled: true,
    },
    {
      _id: "90:8d:78:a8:e1:43",
      ip: "10.10.10.72",
      name: "D-LinkSensor",
      mac_addr: "90:8d:78:a8:e1:43",
      enabled: true,
    },
    {
      _id: "74:da:38:23:22:7b",
      ip: "10.10.10.232",
      name: "EdimaxPlug2101W",
      mac_addr: "74:da:38:23:22:7b",
      enabled: true,
    },
    {
      _id: "6c:72:20:c5:17:5a",
      ip: "10.10.10.11",
      name: "D-LinkWaterSensor",
      mac_addr: "6c:72:20:c5:17:5a",
      enabled: true,
    },
    {
      _id: "20:f8:5e:ca:91:52",
      ip: "10.10.10.123",
      name: "Aria",
      mac_addr: "20:f8:5e:ca:91:52",
      enabled: true,
    },
    {
      _id: "ac:cf:23:62:3c:6e",
      ip: "10.10.10.149",
      name: "EdnetGateway",
      mac_addr: "ac:cf:23:62:3c:6e",
      enabled: true,
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
