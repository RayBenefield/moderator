const Bot = function() {
    this.channels = [];

    this.link = function(channel) {
        this.channels.push(channel);
    };
};

const moderator = {
    createBot() {
        return new Bot();
    }
};

export default moderator;
