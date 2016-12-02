const Passthrough = function() {
    this.intents = [];

    this.as = (intent) => {
        this.intents.push(intent);
    };
};

export { Passthrough };
