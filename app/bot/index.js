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

controller.hears(['hello','hi'], 'direct_message,direct_mention,mention', maesterBot.hello);
controller.hears(['help'], 'direct_message,direct_mention,mention', maesterBot.help);
controller.on('direct_message', maesterBot.question);
