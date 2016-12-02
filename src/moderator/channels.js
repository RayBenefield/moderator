import { Observable } from 'rxjs';
import readline from 'readline';

const Console = function() {
    const stream = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return Observable.create((subscriber) => {
        stream.on('line', (input) => {
            subscriber.next(input);
        });
    });
};

export { Console };
