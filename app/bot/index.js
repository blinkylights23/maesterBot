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

controller.hears(['help'], 'direct_message,direct_mention,mention', (bot, message) => {
  fs.readFile(path.join(__dirname, 'help', 'general.md'), (err, data) => {
    if (err) {
      console.warn(err, data.toString('utf-8'));
    }
    bot.reply(message, data.toString('utf-8'));
  });
});
