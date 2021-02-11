//for 21.11.2020
let newInfectToday = 574;
let newRecovToday = 222;
let newDeadToday = 5;
const population = 622359;  //2018 
let allInfectNow = 11090;
let IRatio; 
let DRatio;
//calculating the day when everyone is infected CETERIS PARIBUS the infection growth is positive
calcDayI = function() { 
    this.allNewInfectToday = newInfectToday - newRecovToday - newDeadToday;
    IRatio = (population - allInfectNow) / this.allNewInfectToday
    // float to whole number transformation
    wholeI = Math.trunc(IRatio);
    return wholeI;
}

//calculating the day when everyone are dead CETERIS PARIBUS the infection and death growth is positive

calcDayD = function () {
    DRatio = population / newDeadToday;
    wholeD = Math.trunc(DRatio);
    return wholeD; 
}


document.getElementById('newInfected').innerHTML = newInfectToday;
document.getElementById('newRecovered').innerHTML = newRecovToday;
document.getElementById('newDead').innerHTML = newDeadToday;
document.getElementById('estInfected').innerHTML = calcDayI(IRatio);
document.getElementById('estDead').innerHTML = calcDayD(DRatio);

//today's date block
let today = new Date();

let date = today.getDate()+'   '+(today.getMonth()+1)+'   '+today.getFullYear();
document.getElementById('date').innerHTML = date;


