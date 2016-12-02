const Passthrough = function() {
    this.branches = {};
    this.intents = [
        'Hello'
    ];

    this.addBranch = (intent, branch) => {
        const position = this.intents.indexOf(intent);
        if (position >= 0) {
            this.branches[intent] = branch;
        }
    };

    this.next = (data) => {
        const position = this.intents.indexOf(data);
        if (position >= 0) {
            console.log(data);
        }
    };
    this.error = data => console.log(data);
    this.complete = data => console.log(data);
};

export { Passthrough };
