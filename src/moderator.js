import { range } from 'rxjs/observable/range';
import ModeratorObservable from './moderator-observable';

const bot = new ModeratorObservable(range(0, 20));
const source = bot.take(5).say('test');

source.subscribe(x => console.log(x));
