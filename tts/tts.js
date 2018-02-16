#!/usr/bin/env node
var exec = require('child_process').execSync;

// curl 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js';

function say(something){
  command = "say ";                      // "say" in this case is a built-in shell command on MAC OS.
  // command = "say -v \"Victoria\" ";   // use the flag "-v" to change to a different voice
  exec(command + something );
}
say('It is a melancholy object to those, who walk through this great town, or travel in the country, when they see streets, roads and cabbin-doors crowded with beggars of female sex, followed by three,four, six children, all rags, and importuning every passenger for an alms.');
console.log('hello world');

