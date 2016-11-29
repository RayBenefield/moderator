## Initial thoughts

I'd like a declarative API that is specific to the domain of chatbots. While `RxJS` has a lot of functions to manipulate a stream of events, I want to add more operators that allow an expressive, easy to read dialog for developers to build. Part of the value of declarative programming is the ability to reason the problem, and I want to improve that readability by sticking to domain concepts like `ask until` or `say`. Inspiration should be taken from Domain Driven Design `DDD` in terms of keeping the language between developers and the business in sync.
