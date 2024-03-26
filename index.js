// Code your solution in this file!


function distanceFromHqInBlocks(pickupLocation) {
    const headquarterLocation = 42;
       return Math.abs(pickupLocation - headquarterLocation) ;
}

function distanceFromHqInFeet (pickupLocation) {
    const blockSize = 264;
    return distanceFromHqInBlocks (pickupLocation) * blockSize

}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(start-destination) * 264;
  }

  function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);
    //returns the fare for the customer
    if (distanceTravelled < 400 ) {
        return 0;
    }
    else if (distanceTravelled <2000 && distanceTravelled > 400) {
        return (distanceTravelled - 400) * 0.02 ;
    }
    else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
        return 25 ; 
    }
    else {
        return "cannot travel that far"
    }
  }