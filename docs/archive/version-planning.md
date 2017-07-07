## `v0.1.0` MVP Structure

Basically we want to release as quickly as possible. A useable product is much
more valuable than one that is in progress and then never touched again. The
sooner it gets delivered the more likely it will grow. We need to consider the
absolute bare minimum to make this wor... even on the command line. The less
work the better, the goal is to establish patterns more than anything. As long
as those patterns lead to easily extendable systems, then we should be good.

Basic needs:

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
Bot.understand(sayingHello).in(new Passhtrough()).as('Hello');

Bot.wakeUp();
```

This version was meant to implement the structure of streams and the initial
API. What is the easiest way to use the framework and is it intuitive was the
real question. Is this declarative style feel like it is valuable? Based on what
was done so far, I definitely think the answer is yes.


## v0.2.0 Core Extensions

To evolve the framework we need to incorporate actual useful stuff. Here are the
parts that need upgraded:

### What's needed?

 - **Bot** - The bot needs to be able to handle multiple of everything, channels, recognizers, skills, etc.
 - **Channel** - Console channel is ok, but really we should have a Facebook Messenger channel (most familiar for me at least)
 - **Recognizer** - Hardcoded strings are dumb, so we need at least Regex matching, but even better would be Wit.ai, API.ai, or Luis
 - **Branch** - We need to start introducing some more useful operators, perhaps something like filling in entities with `askUntil` this means we need a `message-observable` so we can interweave the two streams for flow control

In order to support a Facebook Channel we need to have an Rx enabled server, so
I want to branch off and create `Rxtify` as a `restify` wrapper. We also need to
figure out the actual message format since the introduction of real recognizers
means parsing out entities and discovering intent.

Along with this we need to improve devops, so testing needs to be figured out so
we can improve iteration speed, as well as continuous integration for builds,
and task automation with gulp. At the BARE minimum, I want testing figured out.
Devops can be moved to `v0.3.0` if need be.

### Bare Minimum Priorities

* means it is optional and exploratory

1. Testing
     - Branches
     - *Recognizers
     - *Channels
     - *Bot
1. Regex Recognizer
1. Branch Event Structure
     - Intent
     - Entities
1. Operators
     - askUntil
1. Channels
     - Facebook Messenger
