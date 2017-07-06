## Dec 2nd, 2016

This morning I realized that the branch system that was originally designed was
all wrong. I realized that if the branch subscribes to the channel, then EVERY
single message that comes through will trigger the branch from the beginning.
Which is not what we want. So if a branch has the following structure:

```js
(branch$) => branch$
    .say('Stuff')
    .askUntil('I need stuff', answerIsValid, 'that is not valid');
```

Then every time a message comes in from the channel it will keep repeating
'Stuff' for every single message while it re-traverses the branch stream. Which
is not what we want to happen.

So this morning I realized that what should actually happen is that the branch
stream and the message stream are two different things. A branch is reliant on
the messages, not a funnel for the messages. For example, a branch should be
able to be `delayedUntil(message)`. With a system like this, I can use
observable operators to manages the message stream separately. I could:

```js
(branch$, message$) => branch$
    .say('Stuff')
    .say('I need words from you')
    .delayUntil(
        message$.filter(answerIsValid)
    )
    .remember();
```

I could provide a new operator that is:

```
(branch$, message$) => branch$
    .sayUntil(
        message$.filter(answerIsValid),
        'That is not valid'
    )
```

In addition to that channels should not be directly subscribed to branches, they
should be subscribed to the messages from the branches instead. Recognizers are
subscribed to branches, because when the branch completes then the recognizer
needs to know to continue onward. This also means that it will be easier to
interleave branches in the future as well. Lots to do, but I'm glad that is out
of the way. I knew this was more complicated than I intially thought, I just
don't have enough experience with "Everything is a stream". But I'm getting
there.
