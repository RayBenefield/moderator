## Overview

Basically we want to release as quickly as possible. A useable product is much more valuable than one that is in progress and then never touched again. The sooner it gets delivered the more likely it will grow. We need to consider the absolute bare minimum to make this wor... even on the command line. The less work the better, the goal is to establish patterns more than anything. As long as those patterns lead to easily extendable systems, then we should be good.


## Basic Needs

 - **Bot** - What is needed to tie it all together
 - **Channel** - The communication method for both input and output
 - **Recognizer** - Recognize messages to determine branch
 - **Branch** - Do stuff
 - **Observable** - Provide operators for the stream

```js
// index.js
import moderator from 'moderator';
import { Console } from 'moderator/channels';
import { Passthrough } from 'moderator/recognizers';

const Bot = moderator.createBot();
Bot.link(new Console());

const sayingHello = message$ => message$.say('Hello World');
Bot.understand(sayingHello).in(new Passhtrough().as('Hello'));

Bot.wakeUp();
```
