## Overview

I believe in thinking of big possibilities from the get go of a project. As long as a focus on small tasks, minimum viable product, and agile developmnet is maintained the potential for feature creep is greatly reduced. Dreaming big improves motivation and ensures that flexibility is considered early. Ensuring that the "You ain't gonna need it" [YAGNI] principle is still followed is also crucial to avoid adding features that are just a waste of time. The key is to build quality abstractions and focusing on the SOLID principles, especially the Open/Closed principle (open for extension, closed for modification). On that note.


## Designing for Enterprise

My original exposure to chatbots was from a work project that required scaling and considering multiple lines of business building chatbots simultaneously. How does one keep things scalable, discoverable, flexible, while also remaining standardized, auditable, and maintainable? For me this became an interesting problem to delve about. In my free time, I've thought a lot about this and I think I may have stumbled upon a potential philosophy that could make this scale and management doable.


## IRL (In real life)

How do we handle things in the real world on an enterprise scale? With technology we have sooo much power and potential that sometimes we forget that limitations are in place in nature for a reason and perhaps understanding those limitations in reality can help us build better software virtually. In real life no single person can handle everything. There is extreme strain on a single invidual, which is why we build teams. And no single team can handle things for an enterprise, it takes a lot of coordination across companies to keep it afloat. With that in mind we shift into the thought process, that every chatbot can only handle so much and is a virtual model of a person.


## Stand Together

In my mind the initial idea is that chatbots can consult "friends", "neighbors", "teams", etc. in order to help their current client. A lot of the time in the real world we hit a triage layer where your questions get pushed to a different team with a specialty in the domain that you are considering. Even in that team there may be more focused subdomains. Chatbots should reflect this architecture. They should be able to delegate to one another, and perhaps not all of them need to be all aware. There may be benefits to a heirarchical structure in terms of lots of chatbots as well as benefits to teams of chatbots that share tasks. This concept isn't much different than the modern day philosophy of microservices. So how do we design and build for a philosophy like this?


## Moderating

Hehehe... anyways, the goal is that we provide a tool that provides the ability not just to construct chatbots, but also gives them the innate ability to chat with one another. Chatbots should be able to ask each other questions, working in the same confines as humans talkign to chatbots. If chatbot Alice needs to know where a document is, she should legitimately "ask" Jane where the file might be. Jane might return the whole file, or a link to it, and Alice should handle this as if a human had given her a file or a link. With this also comes the natural ability to replace a human with a chatbot and vice versa.

Let's consider a scenario. Perhaps a particular person knows how to find files best, so the chatbot asks the human in a chat, "Hey can you get me the file for Jack?", and the human will respond with sure, here it is, I've attached it. And Alice just knows based on the intent that the file is available as a message attachment. In the future, automation comes to the file department and Alice is told, just redirect your questions over to this channel instead now.

This scenario is exactly how it would work in the real world. If the person responsible for a particular job is no longer responsible for that, they can redirect, either beforehand by sending out a notice, or maybe at "runtime" when asked. Or perhaps they delegate and directly ask themselves. There is a lot of benefits to considering this philosophy. It can help finalize design decisions thinking about how the future will be.


## How do we do this in practice?

On top of `Channels` and `Intents`, there needs to be a concept of `Friends`. A `Friend` should have info on them, like what they can do and how they can be reached. This works well with the consideration of `Channels` and `Intents`. Perhaps responsibilities may be a more appropriate concept, but this is just very high level for now. We just need to keep this in mind moving forward.
