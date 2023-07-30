function distanceFromHqInBlocks(pickUpLocation) {
    const HQLocation = 42;
    const distanceByBlocks = Math.abs(HQLocation - pickUpLocation)
    return distanceByBlocks;    
};

function distanceFromHqInFeet(pickUpLocation) {
    const distanceByBlocks = distanceFromHqInBlocks(pickUpLocation)
    const distanceByFeet = distanceByBlocks * 264;
    return distanceByFeet;
};

function distanceTravelledInFeet(start, destination) {
    const distanceTraveled = Math.abs(destination - start) * 264;
    return distanceTraveled;
};

function calculatesFarePrice(start, destination) {
    const distanceTraveled = distanceTravelledInFeet(start, destination);
    if (distanceTraveled <= 400){
        const fee = 0
        return fee
    }
    else if(distanceTraveled > 400 && distanceTraveled <= 2000){
        const fee = (distanceTraveled - 400) * 0.02
        return fee
    }
    else if (distanceTraveled > 2000 && distanceTraveled <= 2500){
        const fee = 25 
        return fee
    }
    else {
        return 'cannot travel that far'
    }
}