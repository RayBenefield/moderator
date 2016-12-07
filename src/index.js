const Bot = function Bot() {
    this.channels = [];
    this.skills = [];
    this.recognizers = [];

    this.link = function link(channel) {
        this.channels.push(channel);
    };

    this.understand = function understand(skill) {
        return (this.skills[skill] = {
            in: (recognizer) => {
                this.recognizers.push(recognizer);
                return {
                    as: (intent) => {
                        const branch = recognizer.addBranch(intent, skill);
                        branch.subscribe(this.channels[0]);
                    },
                };
            },
        });
    };

    this.wakeUp = function wakeUp() {
        this.channels[0].subscribe(this.recognizers[0]);
    };
};

const moderator = {
    createBot() {
        return new Bot();
    },
};

export default module.exports = moderator;
