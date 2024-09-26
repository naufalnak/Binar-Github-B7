function planeSimulation(fly, latitude) {
  try {
    if (fly === 0) {
      takeOff();
    }
    while (fly < 3) {
      flight(latitude);
      latitude += Math.floor(Math.random() * 1000);
      fly++;
    }
    land();
  } catch (error) {
    if (error instanceof TakeOffError) {
      console.log(error.message);
    } else if (error instanceof FlightError) {
      latitude = 9000;
      if (fly < 3) {
        fly++;
        console.log("Trying to fly again");
        planeSimulation(fly, latitude);
      }
    } else if (error instanceof EngineError) {
      console.log("Plane is crashing");
    } else {
      console.log("Flight simulation failed");
    }
  }
}
