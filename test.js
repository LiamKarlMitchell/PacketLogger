#!/usr/bin/env node

var util = require('util');
var pcap = require("pcap");

var myCap = new pcap.Pcap();
var devs = myCap.findalldevs();
console.log(JSON.stringify(devs));

console.log(devs[0].addresses[0].addr);