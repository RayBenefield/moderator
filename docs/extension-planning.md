## Initial Thoughts

`Moderator` should be able to grow as the market continues to grow. Because chatbots are still in their infancy, the framework needs to be prepared to take on new tools. It needs to be able to keep up with new Messaging Channels, NLP Engines, API Changes, Storage Options, etc.


### Recognizers

Recognizers are responsible for parsing out the meaning of the messages that come into the moderator. They analyze for the intent of the message (and the probably of that intent), the entities that can be extracted from the message, and any other details that can be garnered from it.

 - **Wit.ai/Api.ai/Luis** - NLP Engines that already provide this analysis, som understand heirarchical entities, some return single intents, others return multiple intents, some handle composite entities, perhaps some can recognize multiple intents in the future
 - **Regex** - Basic regex matching, can use grouping to assign values to entities
 - **Passthrough** - Converts what is given directly into an intent, with predetermined entities
 - **String** - Analyzes based on the raw string and the difference between the given string and anticipated strings to get a score
 - **Command** - Expects a syntax structure to the message similar to a commandline command pattern with flags and arguments; pretty much a starting use case for ChatOps

#### Additional considerations

I've noticed most NLP engines ownly recognize based on a string, it is possible that intent, entity extraction, and scoring can be influenced by more complex parts of a message. For example, an email can communicate a Subject, Description, and Attachments. You can also send your location from Messenger, or send files through SMS, etc. There may be a lot of growth in the recognition space. We should keep this in mind moving forward.


### Channels

 - SMS
 - Facebook Messenger
 - Twitter
 - Slack
