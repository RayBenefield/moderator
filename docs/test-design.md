## Overview

Automated testing is powerful. So I want to make sure that we have a way for
consumers to easily test their converational system. I don't know how easy or
useful it will be to test channels or recognizers (due to them being very tied
to side effects). Same for internal testing of the Bot instance itself, but I'd
hope to include at least API testing for them so any collaboration doesn't break
any usage.

## Testing Tools

My first inclination is that a very special `TestChannel` should be used.
Considering a testing suite as its own channel makes sense since that is where
the input and output is coming from. We may need a test `Bot` as well, but for
now the normal bot should be sufficient. The `TestBot` may be responsible for
providing a `TestBranchObservable` that will properly stub the operators that
are typically used for side effects. If we do provide a `TestBot` it may make
sense to just automatically bootstrap the bot with the `TestChannel` and just
expose it.

## API Expectations

I want to make sure that the API for creating tests are just as expressive as
building the bot itself. There are currently many tools that create "mocked"
bots for demonstration purposes so I'll probably design it to replicate that
using a `User says <blah>` and a `Bot says <blah>` interface.

```js
import { TestBot } from 'moderator';
import { askingForName } from './branches';

it('should ask and accept your name', () => {
    // Given
    const { bot, user } = new TestBot();
    bot.understands(askingForName);

    // When
    user.says('Hello');
    bot.says('Hello, what is your name?');
    user.says('Jill');
    bot.says('Hello Jill.');

    // Then
    expect(bot.isCorrect()).toBeTrue();
});
```

I don't have a specific test framework in my head being used, but you get the
idea. The goal is that we be able to explicitly declare a conversation and
ensure the bot is correct. The major parts that need to be tested will be the
branches, so the bot needs to explicitly be given a "skill" to test. It may also
be valuable to consumers to use a data structure for the conversation to reduce
typing. For example:

```js
// Given
const conversation = {
    Hello: [
        'Hello, what is your name?',
    ],
    Jill: [
        'Hello Jill.'
    ]
};

// When
user.hasConversation(conversation);

// Then
expect(bot.isCorrect()).toBeTrue();
```

Visually that feels like it could work for some people so that as an avenue for
present may be nice. The priority is definitely the more declarative programming
interface with `user.says()`;


## Avoiding coding to implementation

The most difficult part will be avoiding coding to an implementation of the
branches which makes the test brittle in terms of the branch being updated with
spelling or fluff words, and the testing having to update as well. Right now the
best way to avoid that explicitly is using regexes as a direct substitute for
strings if people would like to use that option. For some situations you can
look for just keywords like the user's name, but this won't work for everything.
In my mind, ideally bots have their own "intents" that they send to the user and
those intents are just expressed in a particular sentence. If the testing system
was awesome, it would be able to detect the intent of the message the bot sends,
but I don't feel like there is a good way to handle that locally without relying
on having a separate NLP model, just for your bot. Considering that bots could
converse with each other in the future, those models may already exist in a
consumer's ecosystem, but who knows. We don't want to rely on external resources
to solve this problem and do too much metadata that bloats the branches/bot
creation.
