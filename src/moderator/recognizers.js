import { of } from 'rxjs/observable/of';
import BranchObservable from './branch-observable';

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
            const newBranch = new BranchObservable(of(0));
            const branch = this.branches[data](newBranch).take(1);
            branch.subscribe({
                next: () => console.log('next'),
                complete: () => console.log('done'),
            });
        }
    };
    this.error = data => console.log(data);
    this.complete = data => console.log(data);
};

export { Passthrough };
