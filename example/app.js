/* eslint-disable import/no-extraneous-dependencies */

import moderator from 'moderator';
import { Console } from 'moderator/channels';
import { Passthrough } from 'moderator/recognizers';

const Bot = moderator.createBot();
Bot.link(new Console());

const sayingHello = branch$ => branch$.say('Hello World');
Bot.understand(sayingHello).in(new Passthrough()).as('Hello');

Bot.wakeUp();
