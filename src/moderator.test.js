import moderator from './moderator';
import { Console } from './moderator/channels';

const Bot = moderator.createBot();
Bot.link(Console);

const sayingHello = message$ => message$.say('Hello World');
Bot.understand(sayingHello);
