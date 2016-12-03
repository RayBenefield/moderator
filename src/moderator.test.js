import moderator from './moderator';
import { Console } from './channels';
import { Passthrough } from './recognizers';

const Bot = moderator.createBot();
Bot.link(new Console());

const sayingHello = branch$ => branch$.say('Hello World');
Bot.understand(sayingHello).in(new Passthrough()).as('Hello');

Bot.wakeUp();
