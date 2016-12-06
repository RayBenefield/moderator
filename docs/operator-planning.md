## Overview

RxJS is awesome and provides MANY operators to assist in managing a data stream. However for a declarative chatbot, some of the operators just feel a little to... mathematical. So we will be providing custom operators for the `BranchObservable` that is passed to branch functions to provide a better DSL for chatbots. These operators are shooting to cover the most common conversation control techniques that we can think of.

## Operators

### `say(<message>)`

This operator is about sending `message` to the user. This is an asynchronous operation that internally uses the RxJS `do()` operator. It spreads a message to the source channel of the latest message.

**aliases**: `send`

```js
branch$ => branch$
    .say('Hello there')
    .say(() => isWeekend ? 'Today is a weekend' : 'Today is a weekday')
    .send(dayCard)
    .send(getWeatherCard)
```


### `askUntil([<prompt>,] <predicate>, <re-prompt>)`

This operator provides a method of requesting for information. If you pass two arguments, the first argument should be the `predicate` that will stop the waiting and the second should be the `re-prompt`. If the `predicate` fails, then the `re-prompt` will be sent. If you pass three arguments the first should be the initial question. If the predicate fails the first time, then it will ask the `prompt`. When it fails every time after that it will `re-prompt`.

```js
(branch$, messages$) => branch$
    .askUntil(
        'When were you born?',
        isValidDate,
        'That is not a valid date.'
    )
```


### `split(<predicate>, <branch>)`

This operator will allow a branch to split permanently into multiple paths. This operator continues the path forward if need be so you can split into just a false branch and continue the true branch in the same branch.

```js
branch$ => branch$
    .askUntil(
        'When were you born?',
        isValidDate,
        'That is not a valid date.'
    )
    .split(under21, nonAlcoholicBranch)
    .say('Would you like an alcoholic beverage?')
```


### `nest(<branch>)`

This operator will defer control to another branch temporarily letting it deal with messages, and when it is done, control will return to the parent branch.

```js
branch$ => branch$
    .nest(getBirthdayBranch)
    .say(({ birthday }) => `Your birthday is ${birthday}.`)
```


### `confirm(<message>)`

This operator requests a simple confirmation from the user. Under the scenes it parses out the response for something that is truthy.

```js
branch$ => branch$
    .confirm('Shall I get the menu for you?')
    .split(saidNo, askForOrderBranch)
    .map(({ age }) => getMenu(age))
    .say(`Here is your menu: ${menu}`)
```
