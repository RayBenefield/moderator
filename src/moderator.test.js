import moderator from './moderator';
import { Console } from './moderator/channels';

const Bot = moderator.createBot();
Bot.link(Console);
