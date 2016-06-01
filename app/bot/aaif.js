'use strict';

var config = require('../conf'),
    fs = require('fs'),
    path = require('path');



var AAIF = class {

  constructor() {
    this.bot = null;
    this.sessions = [];
  }

  hello(bot, message) {
    bot.reply(message, 'Hello, this is Maester Bot');
  }

  help(bot, message) {
    fs.readFile(path.join(__dirname, 'help', 'general.md'), (err, data) => {
      if (err) {
        console.warn(err, data.toString('utf-8'));
      }
      bot.reply(message, data.toString('utf-8'));
    });
  }

}


module.exports = AAIF;
