import { Observable } from 'rxjs';

class ModeratorObservable extends Observable {
    constructor(source) {
        super();
        this.source = source;
    }

    lift(operator) {
        const observable = new ModeratorObservable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }

    say(text) {
        return this.do(() => console.log(text));
    }
}

export default ModeratorObservable;
