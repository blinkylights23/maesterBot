'use strict';

var config = require('../conf'),
    botkit = require('botkit'),
    AAIF = require('./aaif');

var controller = botkit.slackbot({
  debug: config.get('bot:debug')
});

var bot = controller.spawn({
  token: config.get('SLACK_TOKEN')
}).startRTM();

var aaif = new AAIF();

controller.hears(['hello','hi'], 'direct_message,direct_mention,mention', aaif.hello);
controller.hears(['help'], 'direct_message,direct_mention,mention', aaif.help);
