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