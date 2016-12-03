import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import BranchObservable from './branch-observable';

const Passthrough = function Passthrough() {
    this.branches = {};
    this.intents = [
        'Hello',
    ];

    this.addBranch = (intent, branch) => {
        const position = this.intents.indexOf(intent);
        if (position >= 0) {
            const observable = new BranchObservable(of(0));
            const source = branch(observable);
            this.branches[intent] = source;
            return observable.messages;
        }
        return Observable.emtpy();
    };

    this.next = (data) => {
        const position = this.intents.indexOf(data);
        if (position >= 0) {
            this.branches[data].subscribe();
        }
    };
};

export { Passthrough };
