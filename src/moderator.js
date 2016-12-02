const Bot = function() {
    this.channels = [];
    this.skills = [];
    this.recognizers = [];

    this.link = function(channel) {
        this.channels.push(channel);
    };

    this.understand = function(skill) {
        return this.skills[skill] = {
            in: (recognizer) => {
                this.recognizers.push(recognizer);
            }
        };
    }

    this.wakeUp = function() {
        this.channels[0].subscribe(data => console.log(data));
    }
};

const moderator = {
    createBot() {
        return new Bot();
    }
};

export default moderator;
