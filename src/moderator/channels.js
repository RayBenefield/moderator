import readline from 'readline';

const Console = function() {
    const stream = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
};

export { Console };
