/* eslint-disable no-console */
import { Subject, Observable } from 'rxjs';
import readline from 'readline';

const Console = function Console() {
    const stream = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return Subject.create(
        {
            next: data => console.log(data),
            error: data => console.log(data),
            complete: data => console.log(data),
        },
        Observable.create((subscriber) => {
            stream.on('line', (input) => {
                subscriber.next(input);
            });
        }),
    );
};

export { Console };
