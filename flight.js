<<<<<<< HEAD
function flight(latitude) {
  if (Math.random() > 0.75) {
      throw new EngineError('Engine is not working');
  }
  // 3000 < latitude < 10000
  if (latitude > 10000 || latitude < 3000) {
      console.log('Plane is flying at latitude: ', latitude);
      throw new FlightError('Cannot fly at this latitude');
  }
  console.log('Flying at latitude: ', latitude);
}

function land() {
  console.log('Plane is landing');
}

let latitude = Math.floor(Math.random() * 10000);
let fly = 0;
planeSimulation(0, 9000);
=======
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
>>>>>>> 3f98443e98998312b0617f8dc6a55d230adf84ef
