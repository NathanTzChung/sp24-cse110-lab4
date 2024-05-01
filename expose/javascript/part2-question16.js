// Question 16
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const prop in statistics){
    let currVal = statistics[prop];
    if(prop[0] == 'r' || (currVal % 2) == 1) {
        console.log(prop);
    }
};