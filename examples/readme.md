## Step-by-step

Getting started with `moderator` is extremely simple. Below is how we get a Hello World application working on the terminal. I've provided both ES5 and ES6 setups for convenience.

### Step #1

Install `moderator` using **one** the following:


#### ES5

```
yarn add moderator
npm install moderator --save
npm i moderator -S
```

#### ES6

```
yarn add moderator babel-cli babel-preset-es2015
npm install moderator babel-cli babel-preset-es2015 --save
npm i moderator babel-cli babel-preset-es2015 -S
```


### Step #2

Type or copy/paste the code below in your `index.js` file at the project root:


#### ES5

```js
var moderator = require('moderator');
var { Console } = require('moderator/channels');
var { Passthrough } = require('moderator/recognizers');

var Bot = moderator.createBot();
Bot.link(new Console());

var sayingHello = function(message$) {
    return message$.say('Hello World');
};
Bot.understand(sayingHello).in(new Passthrough()).as('Hello');

Bot.wakeUp();
```


#### ES6

```js
// .babelrc
{
    "presets": ["es2015"]
}
```

```js
// index.js
import moderator from 'moderator';
import { Console } from 'moderator/channels';
import { Passthrough } from 'moderator/recognizers';

const Bot = moderator.createBot();
Bot.link(new Console());

const sayingHello = message$ => message$.say('Hello World');
Bot.understand(sayingHello).in(new Passthrough()).as('Hello');

Bot.wakeUp();
```


### Step #3

Run the following command from the project root:


#### ES5

```
node ./index.js
```


#### ES6

```
babel-node ./index.js
```


### Step #4

You should be in a command prompt waiting for input. Type `Hello` (case sensitive) and you should see a response back that says `Hello World`.


**Congrats! You have completed a Hello World application.** 


## Explanation

So what does all that code mean? Let's parse it out line by line (or group of lines). Explanations are only in ES6 to avoid verbosity.

```js
import moderator from 'moderator';
```

This is the main module, right now it provides only one method. `createBot()`. Read below for info on that.

```js
import { Console } from 'moderator/channels';
```

The `moderator/channels` module contains named exports of every channel that is currently supported by `moderator`. These channels are how you interact with a user.

```js
import { Passthrough } from 'moderator/recognizers';
```

The `moderator/recognizers` module contains named exports of every recognizer that is currently supported by `moderator`. These recognizers determine the intent of messages from the user and any entities that can be found in those messages.

```js
const Bot = moderator.createBot();
```

`createBot` bootstraps a bot for you. You can then configure that bot to your hearts content using the lines below.

```js
Bot.link(new Console());
```

`Bot.link()` takes a new channel instance and ties it to the bot. The bot will be able to handle input and output from that channel after linking it.

```js
const sayingHello = branch$ => branch$.say('Hello World');
```

This is the basic structure of a branch. A branch is a flow of steps in a conversation. The `branch$` variable is an `RxJS Observable`, with custom operators specifically for the chatbot domain. `say()` is one of those operators that sends a message out the connected channels.

```js
Bot.understand(sayingHello).in(new Passhtrough()).as('Hello');
```

This links the `sayingHello` branch to the `Hello` intent from the `Passthrough` class. If the message coming through goes through the recognizer and the recognizer recognizes an intent, it will trigger the branch tied to it with `understand()`. With the `Passthrough` recognizer, the `sayingHello` branch will only get executed IF the message is `Hello`. `Passthrough` is case sensitive as it just passes the message through as the intent.

```js
Bot.wakeUp();
```

Once all is said and done and the bot is configured, `wakeUp()` will tie everything together and begin receiving messages. No messages will be processed until `wakeUp()` is called.
