class Counter {
    private count: number;

    constructor(initialValue: number = 0) {
        this.count = initialValue;
    }

    increment(): void {
        this.count++;
    }

    decrement(): void {
        this.count--;
    }

    reset(): void {
        this.count = 0;
    }

    getCount(): number {
        return this.count;
    }
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());
counter.reset();
console.log(counter.getCount());