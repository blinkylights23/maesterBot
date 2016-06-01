'use strict';

var config = require('../conf'),
    botkit = require('botkit'),
    MaesterBot = require('./maesterbot');

var controller = botkit.slackbot({
  debug: config.get('bot:debug')
});

var bot = controller.spawn({
  token: config.get('SLACK_TOKEN')
}).startRTM();

var maesterBot = new MaesterBot();

controller.hears(['\bhello\b','\bhi\b'], 'direct_message,direct_mention,mention', maesterBot.hello);
controller.hears(['\bhelp\b'], 'direct_message,direct_mention,mention', maesterBot.help);
controller.hears(['^book\b\s*(.*)'], 'direct_message,direct_mention,mention', maesterBot.help);
controller.hears(['^character\b\s*(.*)\s*(.*)'], 'direct_message,direct_mention,mention', maesterBot.help);
controller.hears(['^house\b\s*(.*)\s*(.*)'], 'direct_message,direct_mention,mention', maesterBot.help);
// controller.on('direct_message', maesterBot.question);
