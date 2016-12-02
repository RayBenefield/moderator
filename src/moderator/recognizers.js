const Passthrough = function() {
    this.intents = [];

    this.as = (intent) => ({
        next: data => console.log(data),
        error: data => console.log(data),
        complete: data => console.log(data),
    });
};

export { Passthrough };
