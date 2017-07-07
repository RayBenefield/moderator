# From Framework to Platform

7 months ago I started this framework, **Moderator**, in order to propose a more
declarative approach to building chatbots. I was never able to take more time to
build upon the framework. Recently I found a very valuable use case for chat
bots that I think is worth exploring. I also eventually realized that the name
**Moderator** would be great for the platform. So I'm shifting the focus of this
framework instead into a tool to use and build out the Moderator platform.


## The Beginning

So what will the **Moderator** platform provide as a service? Starts with my own
particular need that I discovered. A little over a year ago I was live streaming
coding sessions for a Halo project that I did last yaer. Something that I
realized was that I spent a lot of time answering questions. I plan on getting
back into live coding yet again, and was not looking forward to answering the
same questions over and over again. And then I realized I already know how to
solve this problem. I've been working in the AI chatbot industry for almost a
year now, why not just write a chatbot?


## AI as a Service

So Artificial Intelligence as a service is slowly becoming a thing. We see
platforms like Kasisto, API.AI, Wit.AI, Luis, AWS Lex, etc. popping up all over
the place to provide general chatbot creation. However all of these chatbots
were focused on Instant Messaging platforms like Messenger, Slack, Spark, SMS,
etc. But nothing has yet targeted Live Streaming platforms as a channel for
chatbots like Twitch, Youtube, LiveEdu (formerly LiveCoding), Beam, etc.
Currently these platforms rely on essentially command based chatbots like
Nightbot in order to provide supplemental features to the platform. But the
chatbot industry has moved on from commands and regex to trigger actions. Why
not bring Natural Language Understanding to these platforms as a whole?


## A Natural Natural Language Fit

Something that I realized about many chatbots is that they attempt to open up a
new channel of communication for services. Instead of calling into customer
support, you message the business's messenger bot. Instead of going to a portal
to access services, you ask a messenger bot to do a service for you. While this
is all well and good, it is trying to create a new section of a market and shift
consumers to using new interaction methods. This can be jarring for consumers.
Sometimes it is just easier for a consumer to open up and log into a website to
send money vs sending money by asking a bot to do it for you.

**Moderator** will be seeking a different goal. The streaming community already
talks with streamers through a text interface. They already ask streamers to do
something via a message. This is natural for that market already, so why hasn't
this been explored yet? It should be fairly reasonable to expect that when a
viewer asks the stream to change the song playing in the background, or to
answer a question that a bot has the ability to intercept and save the streamer
some time doing the task or answering the question for the streamer. Why should
viewers have to memorize the command list of a bot in order to gain access to
features? Viewers know what they want, it should be the bots job to decipher
that and do it for the viewer while freeing up the streamer to do what they do
best.


## The Hidden Moderator

The goal of **Moderator** is to secretly answer questions for the streamer so
the streamer doesn't have to. Many streamers spend either a lot of time
answering the same questions over and over again, or end up missing a lot of
questions. **Moderator** seeks to free up your time and continue to give your
audience the answers that it deserves. This gets more and more important the
larger the viewer base is as it becomes more and more difficult to answer
questions from every viewer. For something popular like video game streams where
new content is being revealed, this can be invaluable for branding sake and
ensuring that you keep hold of your audience. **Moderator** will answer
questions with your account (when possible) so that you can keep your brandname
and maintain immersion. As opposed to having a "Bot" in your channel that
responds, causing viewers to start to ignore posts by the bot, or losing
branding.


## Interjection First

The first goal of **Moderator** is to intercept questions that are commonly
asked in the channel. For a stream on LiveEdu for example, many viewers first
questions will be "What are you working on?" or "What is this?". Wouldn't it be
great to stop answering that question over and over again? This overlaps into
popular streamer territory where they are commonly asked questions about the
game they are playing. Pros will be asked what team they are on, their thoughts
on weapon X, information on when the next subscriber game is, etc. These are all
easy questions for the **Moderator** to answer for you. In addition, the
**Moderator** should be powerful enough to regularly @mention viewers directly
for their answers, and reference previously answered questions with something
like "I answered that when @someone asked a couple of minutes ago". This natural
management of interaction ensures that not only do you handle frequency, but you
also handle quality.


## Monetization

The goal is to have the model setup to be a subscription service for streamers.
This will be a service that they will want regularly. And in order to allow the
service to grow, the pricing plans will represent usage. The more popular
streamers will need to sport a higher payment plan. And perhaps it isn't exactly
on use, but perhaps it is charged on a per X questions that are handled. This
would actually probably be a better model as streamers actually feel like they
are paying for more value on their terms, rather than paying for suddenly being
popular. A good balance of pricing will need to be taken into account in order
to support the 1% that will have an insane amount of traffic.


## NLP Platform Support

**Moderator** will not be responsible for managing the Natural Language system,
it will delegate to platforms like Wit.AI, API.AI, Luis, etc. This will ensure
less complexity for the platform as a whole and allow streamers to make their
choice. The first integration will focus on Wit.AI due to its completely free
nature. Eventually the goal is to control the annotation/training data and
centralize that, but that is a post MVP goal. Ideally the first NLP platforms
supported will have an export system that will allow streamers to transfer their
annotation/training data into the hands of **Moderator** for improvement in the
future.


## Dynamic Answers

Eventually the platform will move away from simple Questions and Answers (Q&A)
and move into querying for more data. Entity querying will probably be the first
to be supported (find by name, zipcode, person, etc.), and eventually
introducing methods to sort and filter that data. After read-only dynamic
answers are setup then action intents will be introduced where viewers will be
able to subscribe to events, execute actions, etc. and **Moderator** will handle
the dirty work for the streamer. This can come in the form of contests, trivia,
changing songs, joining a queue to join a game, etc.


## Fallback Support

Chatbots are never 100% perfect. Eventually a user will get frustrated with a
chatbot and not get the answer or help they are looking for. In normal domains,
a full blown system has to be integrated to allow the "interaction portal" to
act as a live chat support system. This requires agents being ready to provide
appropriate help since the chatbot couldn't. **Moderator** works in a domain
where this is less necessary. Because interaction with the bot will happen
typically while the streamer is online and actively streaming, it is easy for
the streamer to notice that a quesiton was not answered and easy for them to
jump into prevent the loss of immersion which is extremely powerful. A user
never has to know that the streamer's account is controlled by the bot. In the
future support for SMS messages or something of the like can be used to notify
the streamer of an unanswered question. The streamer can then answer and the bot
has the potential to save this answer and question combo for future use. Which
leads to...


## Continued Learning

The **Moderator** bot will have a key goal of constantly learning what it can
and can't handle and then learning how to cover more and more questions. The
goal will be to have **Moderator** ask for clarification, or request the
streamer secretly to answer the question so that it may learn how to answer in
the future. Training/annotation through continued use is a powerful concept that
isn't widely used yet in the chatbot industry and **Moderator** will strive to
constantly improve by example. A unique trait since the streamer is constantly
active while the bot is being used.
