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

  book(bot, message) {
    let book = message.matched[1]
    bot.reply(message, JSON.stringify({ book: book }));
  }

  character(bot, message) {
    let character = message.matched[1]
    let filter = message.matched[2]
    bot.reply(message, JSON.stringify({ character: character, filter: filter }));
  }

  house(bot, message) {
    let house = message.matched[1]
    let filter = message.matched[2]
    bot.reply(message, JSON.stringify({ house: house, filter: filter }));
  }

  question(bot, message) {
    let parsedMsg = speak.classify(message.text);
    bot.reply(message, JSON.stringify(parsedMsg));
  }

}


module.exports = MaesterBot;
