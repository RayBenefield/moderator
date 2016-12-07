import { Observable } from 'rxjs';

class BranchObservable extends Observable {
    constructor(source) {
        super();
        this.source = source;
        this.messages = Observable.create(
            subscriber => (this.subscriber = subscriber)
        );
    }

    lift(operator) {
        const observable = new BranchObservable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }

    say(text) {
        return this.do(() => this.subscriber.next(text));
    }
}

export default module.exports = BranchObservable;
