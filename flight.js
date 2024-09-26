class TakeOffError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TakeOffError';
    }
}

class FlightError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FlightError';
    }
}

class EngineError extends Error {
    constructor(message) {
        super(message);
        this.name = 'EngineError';
    }
}

function takeOff() {
    if (Math.random() > 0.5) {
        throw new TakeOffError('Cannot take off the flight');
    }
    console.log('Plane is taking off');
}