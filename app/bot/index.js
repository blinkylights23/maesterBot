'use strict';

var config = require('../conf'),
    botkit = require('botkit');

var controller = botkit.slackbot({
  debug: config.get('bot:debug')
});

var bot = controller.spawn({
  token: config.get('SLACK_TOKEN')
}).startRTM();


controller.hears(['hello','hi'], 'direct_message,direct_mention,mention', (bot, message) => {
  bot.reply(message, 'Hello!');
});
