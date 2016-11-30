## Initial Thoughts

`Moderator` should be able to grow as the market continues to grow. Because chatbots are still in their infancy, the framework needs to be prepared to take on new tools. It needs to be able to keep up with new Messaging Channels, NLP Engines, API Changes, Storage Options, etc.


### Recognizers

Recognizers are responsible for parsing out the meaning of the messages that come into the moderator. They analyze for the intent of the message (and the probably of that intent), the entities that can be extracted from the message, and any other details that can be garnered from it.

 - **API Recognizers (Wit.ai/Api.ai/Luis)** - NLP Engines that already provide this analysis via API, som understand heirarchical entities, some return single intents, others return multiple intents, some handle composite entities, perhaps some can recognize multiple intents in the future
 - **Regex** - Basic regex matching, can use grouping to assign values to entities
 - **Passthrough** - Converts what is given directly into an intent, with predetermined entities
 - **String** - Analyzes based on the raw string and the difference between the given string and anticipated strings to get a score
 - **Command** - Expects a syntax structure to the message similar to a commandline command pattern with flags and arguments; pretty much a starting use case for ChatOps

#### Additional considerations

I've noticed most NLP engines ownly recognize based on a string, it is possible that intent, entity extraction, and scoring can be influenced by more complex parts of a message. For example, an email can communicate a Subject, Description, and Attachments. You can also send your location from Messenger, or send files through SMS, etc. There may be a lot of growth in the recognition space. We should keep this in mind moving forward.


### Channels

Channels are responsible for accepting messages from a source and then converting the messages into a standardize format based on all of the information in the message. This could be extremely complex (Facebook can send a lot of data) or be very simple (the Console is just a string). In addition they are also in charge of massaging messages back into a format for the receiving channel, turning the Bot's output into something that can be communicated through the channel. This may be difficult for some channels as channels could support cards, or buttons, or any number of things. There may also have to be sacrifices in communication depending on the channel. For example, the Console and SMS Channels only really accept text and display cards as a unique output doing fun rendering like adding separators or punctuation.

 - **SMS (via Twilio)** - A simple channel that deals in mostly text
 - **API Channels (Messenger/Twitter/Slack)** - Some of these have very complicated formats, like allowing buttons, having titles, subtitles, links, timestamps, etc.
 - **Console** - Strictly text based channel and may use archaic rendering techniques for complex concepts like cards
 - **Script** - Called via commandline script, a one time fire that runs through the bot a single time may not actually be a channel, but just an idea I had in my head
 - **Raw Connector** - For some reason this source knows the message format and already uses it this just essentially passes through the results, a good example would be an api endpoint for simple calls through like Postman or something
 - **Email** - The classic messaging channel nowadays can contain attachements, a subject, header, cc/bcc, etc. Being able to support this could be useful
 - **WebSocket** - A modern protocol now for communicating between the client and the server now, could be a solid use case
 - **Databases** - Interesting idea, perhaps messages are stored in a table and you want to process those messages as they come in, perhaps they are commands to the bot
 - **AWS Lambda** - As serverless becomes more and more of a use case we want to make sure we can handle it properly, it shouldn't be too hard, but it is also dependent on what triggers the lambda function (like API gateway) this may be looking too much into the dev side rather than the consumer side though
 - **SNS Topic** - It is refered to as a "topic" and may be a usecase to consider, perhaps this is a way that Bots can communicate with each other
 - **Queue** - Sometimes you need to queue up messages to be handled, it may be most valuable to just pull them directly from the queue, but this may have to work in conjunction with the original source for message massaging
 - **Alexa** - Speech recognition already converts the entire message into an intent with parameters so this may be a recognizer and channel all in one

#### The Future

Things are growing quickly in the communication space, Google Allo, Google Now, WeeChat (or whatever it is), chats on websites, more and more speech recognition, VR, etc. who knows what kind of inputs we will have to anticipate. We have to be able to adjust and grow based on people needing work to be done for them through commmunication they are used to.
