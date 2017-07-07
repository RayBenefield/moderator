## Overview

The goal of the recognizer is to tack on new metadata to a message that
contains text. This metadata includes the analyzed **Intent** and any
recognized **Entities**. With the intent a particular branch can be chosen, and
with the entities the branch has parameters to make decisions with. These are
an important part of a natural language chatbot.


## Domains

It is possible that the same utterance can mean different things in different
domains. Branches are specifically tied to a given "domain" recognizer under a
given intent. When a message comes in, it will be processed by multiple
recognizers. Every recognizer returns a score for their analysis, the
recognizer with the highest score for their analysis has their intent picked
along with the entities that it parsed out. Each recognizer should know how
confident they are in their answer based on the domain they are in. This is the
responsbility of the NLP.


## Intents

Intents in different doamins could result in the same branch being chosen.
Every branch needs to be mapped explicitly to at least one intent of at least
one recognizer.


## Entities

Entities serve as the parameters for the branch, so they should be compared to
variables in a program. Entities can come in different primitive types, or
specialized types. These entities come specifically from the recognizer.
Entities going into branches should have an expected format and if multiple
recognizers are tied to a branch, they should all put out the expected format.
A special consideration is nested/heirarchical/composite entities. Some NLPs
have support for this. For example, `Luis` sends back their entities in the
form of `SuperType::SubType`, and the entity system needs to be able to support
this. I see these as used like enumerables. Entities can nest as deep as need
be. The structures of entities should look like this:

```js
entities: [
    {
        type: "Type",
        entity: "String",
    },
    {
        type: "SuperType",
        entity: {
            type: "SubType",
            entity: "String",
        },
    },
],
```
