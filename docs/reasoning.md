### Inspiration

Currently the main inspiration of this framework comes from Bot Framework (BotBuilder) by Microsoft. It provides a lot of structure to creating a conversation for a bot. However, I believe that chatbots can be created with declarative programming to make the code much easier to reason and much more flexible to the evolving market.


## Bot Framework Difficulties

Through working with the Bot Framework I've personally felt the following difficulties:


### Microsoft Coupling

This is definitely not the case in their entire system. The `recognizer` system is fairly easy to extend with other NLPs other than the included `LuisRecognizer`. Their connector system however is very tied to their portal. Their portal only supports what it supports. The actual interaction with the channels go through this as a middle man and sometimes, I just don't want to be required to be tied to Microsoft.


### Fuzzy Implementation

If I'm coming from a background of working with the messenger API, Skype, or Twilio, I have a certain level of understanding of how things work when interfacing with these systems. Because of the Bots Framework inclusion of the portal, authentication, and context storage solution, there is a level of fuzziness that is added to this system. All of the sudden I need an emulator to test my bot. I don't need more tool bloat. In addition, if I'm having an issue with the message I'm creating (like I want a specific style of Facebook card), I can't debug that locally. The massaging of the message from the Microsoft structure to Facebook happens in their portal, not somewhere I can easily inspect. It isn't truly open. This makes getting started much much harder.


### Conversation Structure

The Bot Framework provides a dialog system to manage conversation flow. This involves beginning dialogs, ending dialogs, replacing, canceling, and an entire dialog stack. I've run into a couple of issues like infinite loops when not ending a dialog explicitly. I wish something like that was more automatic. These dialogs are fueled by waterfall sequences. Call a function, call next to jump to the next function, or return early and retry that step on the next response from the user. I wish the system was smart enough to know when the waterfall is done for a dialog and just end it afterwards. A lot of the issues I run into are less about my own logic, and more about a piece I was missing because of what the framework expects. Sure this is developer responsibility, but part of a framework is to remove things to think about, not add more to think about.


### Lack of Internal Testing

A couple of years ago I started a TDD kick. Over time I've learned a lot of the value of testing for everyone involved in the project. It provides documentation, re-assurance, an example, and can speed up development in terms of your own framework. There is no testing on the Node side version at least. This makes coding with the framework a little worrisome feeling like anything could accidentally change.


### Lack of External Testing Solution

For the parts consumers build for themselves interacting with your framework (in this case the conversation structure), there should be a solid testing system for those as well. This isn't normally a problem, but because of the emulator/connector system, it is hard to create my own tests for the dialog structure that they use. I spent a lot of time asking myself, how do I ensure that our conversation flows remain the same so I don't have to keep manually testing them. Trying to tap into stdin and stdout, I came up with an extremely hacky version, but it didn't really work fully as I wanted it to.


### Introducing Unit Testability and Reusability is hard

If you go through the documentation, there's a lot of `new`ing up instances of things in your conversation flow. Things like creating a message through the builder, or using a prompt from the builder. My domain became very interweaved with the framework, which made it very difficult to re-use that structure somewhere else., which made it very difficult to re-use that structure somewhere else. Rather than introduce things through dependency injection, I found things just way easier to new things up within the conversation. Eventually I designed an abstraction layer to make that easier, but it wasn't a walk in the park. Because of all of the framework dependencies built into the conversation it was very difficult to modularize the system and just felt clunky all around.


### Difficult to Reason

Seeing lots of conditionals, async calls, object construction, made the code difficult to reason with. I didn't realize this at first though. But about a month ago I discovered Functional Reactive Programming with ReactX and Declarative programming. As soon as I started to wrap my head around it, I realized that the system for dialogs is difficult and convoluted because the domain would be better handled with functional programming. Having to manage the dialog structure in and of itself took a lot of work, while writing in streams, that sort of structured is built into it.


## My Proposed Solution

Chatbots are a very specific domain, and I believe they deserve their own domain language. With Chatbots essentially dealing in streams of messages and dealing a lot in side effects to accomplish tasks, I just felt like Rx would be a better implementation to manage that structure. With Rx we can also introduce domain specific language (DSL) through operators to accomplish very chatbot like things. The "dialogs" in the Microsoft Bot Framework are their own streams as well that could be easier to manage with common Rx operators, and even the channels function as sort of Rx Subjects, subscribing to the user input and passing it in a standard way down to the "dialogs".

It just feels more natural to create a better conversation structure framework using Rx with custom Observables and Operators. So far my suspicions feel right, but I don't know for sure yet. I've only just recently jumped into Rx and FRP (barely even a month), but I think I'm on the right track. I started all this when I discovered `redux-observable` for handling side effects with `redux` and `React`. The concept of streaming all the things hit me like Cupid's arrow. Let's hope I'm in the right direction and not just love struck for now reason. ;)
