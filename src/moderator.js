const Bot = function() {
    this.channels = [];
    this.skills = [];

    this.link = function(channel) {
        this.channels.push(channel);
    };

    this.understand = function(skill) {
        this.skills.push(skill);
    }
};

const moderator = {
    createBot() {
        return new Bot();
    }
};

export default moderator;
