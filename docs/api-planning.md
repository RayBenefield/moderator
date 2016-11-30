## Initial thoughts

I'd like a declarative API that is specific to the domain of chatbots. While `RxJS` has a lot of functions to manipulate a stream of events, I want to add more operators that allow an expressive, easy to read dialog for developers to build. Part of the value of declarative programming is the ability to reason the problem, and I want to improve that readability by sticking to domain concepts like `ask until` or `say`. Inspiration should be taken from Domain Driven Design `DDD` in terms of keeping the language between developers and the business in sync.


## Branch Rough Drafting

```js
const getMapDetails = /* HTTP Observable */;
const startMapPost = /* HTTP Observable */;

// Predicate that returns false on failure and data on success
const hasMapName = (data) => {
    const { entities: { mapName } } = data;
    if (/some.*regex/.test(mapName)) {
        return data;
    }
    return false;
};

// Proposed Branch Structure
(message$) => message$
    .ofIntent('Start a Post')
    .askUntil(
        'What map would you like to create a post for?',
        hasMapName,
        ({ entities }) => `${entities.mapName} isn't a valid map name.`,
    )
    .rememberShortTerm(({ entities: { mapName } }) => mapName)
    .flatMap(({ entities }) => getMapDetails(entities.mapName)
        .sayOnError(`I couldn't find ${entities.mapName}`)
    )
    .do(({ map }) => startMapPost(map))
    .say('I\'ve started your map post for you.')
```

 - **ofIntent** - Should act as a filter, all recognizers should map to a string based intent that the Branch can rely on, including a `RegexRecognizer`
 - **askUntil** - Accepts request string, a predicate that returns false if invalid and data to continue forward if it is valid, and a function to map the relevant data to a string
 - **rememberShortTerm** - Remembers data for a short time frame, perhaps a single session of conversation, or 24 hours. Equivalent operators would exist for:
    - **rememberForNow** - Remembers data for this branch
    - **rememberLongTerm** - Remembers data for user across multiple conversations, must be explicitly forgotten
 - **sayOnError** - Sends a message through the respective channel if there is an error in the observable
 - **say** - Simply sends a message through the respective channel


## Bot Configuration Rough Drafting

```js
import moderator from 'moderator';
import { Facebook, Twilio, Slack } from 'moderator/channels';
import { Regex, Luis, ApiAi } from 'moderator/recognizers';
import { forgetEverything } from 'moderator/basics';
import rxtify from 'rxtify';
import { startingAPost, getPlaytestBounties } from './branches';

const Bot = moderator.createBot();

if (argsv.console) {
    Bot.link(Console);
}

const server = rxtify.createServerStream();

Bot.link(Facebook(verifyToken, pageAccessToken)).to(server('/facebook'));
Bot.link(Twilio(apiKey)).to(server('/twilio'));
Bot.link(Slack(accessToken)).to(server('/slack'));

const smallTalk = ApiAi(agentId, apiKey);
const haloForging = Luis(appId, subscriptionKey);
const haloCustoms = Luis(appId2, subscriptionKey2);

Bot.understand.how.to(startAPost).in(haloForging);
Bot.understand.how.to(getPlaytestBounties).in(haloCustoms);
Bot.understand.how.to(smallTalk);
Bot.understand.how.to(forgetEverything);
```
