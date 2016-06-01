'use strict';

var config = require('../conf'),
    fs = require('fs'),
    path = require('path'),
    speak = require('speakeasy-nlp'),
    AaifClient = require('./aaifClient');



var MaesterBot = class {

  constructor() {
    this.aaifClient = new AaifClient();
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

  question(bot, message) {
    bot.reply(message, 'Question');
  }

}


module.exports = MaesterBot;
