const Passthrough = function() {
    this.intents = [];

    this.next = data => console.log(data);
    this.error = data => console.log(data);
    this.complete = data => console.log(data);

    this.as = (intent) => {
        this.intents.push(intent);
        return this;
    };
};

export { Passthrough };
