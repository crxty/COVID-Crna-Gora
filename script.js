const population = 622359;  //2018
let IRatio, DRatio, RRatio;
let allNewInfectToday, allNewRecovToday;
let newInfectToday, newRecovToday, newDeadToday, allInfectNow;
let today = new Date();
let date = today.getDate()+'   '+(today.getMonth()+1)+'   '+today.getFullYear();
document.getElementById('date').innerHTML = date;

tendency = () => {
    if (newInfectToday > newRecovToday) {
        calcDayD();
        calcDayI();
    } else {
        calcDayR();    
    }
};

// getting user input for calcualtions
const button = document.getElementById('trigger');
button.addEventListener('click', getInput);
function getInput() {
    newInfectToday = document.getElementById('newInfectedInput').value;
    newRecovToday = document.getElementById('newRecoveredInput').value;
    newDeadToday = document.getElementById('newDeadInput').value;
    allInfectNow = document.getElementById('allInfectInput').value;
    console.log(newInfectToday + ' new infected today.');
    console.log(newRecovToday + ' new recovered today.');
    console.log(newDeadToday + ' new dead today.');
    console.log(allInfectNow + ' total infected now.');
    tendency();
}

//calculating the day when everyone is infected CETERIS PARIBUS the infection growth is positive
calcDayI = () => {
    document.getElementById('bad').style.display = 'block';
    allNewInfectToday = newInfectToday - newRecovToday - newDeadToday;
    IRatio = (population - allInfectNow) / allNewInfectToday
    // float to whole number transformation
    wholeI = Math.trunc(IRatio);
    document.getElementById('estInfected').innerHTML = wholeI;
};

//calculating the day when everyone are dead CETERIS PARIBUS the infection and death growth is positive
calcDayD = () => {
    document.getElementById('bad').style.display = 'block';
    DRatio = population / newDeadToday;
    wholeD = Math.trunc(DRatio);
    document.getElementById('estDead').innerHTML = wholeD;
};

// positive growth tendency
calcDayR = () =>  {
    document.getElementById('good').style.display = 'block';
    allNewRecovToday = newRecovToday - newInfectToday - newDeadToday;
    RRatio = allInfectNow - allNewRecovToday;
    wholeR = Math.trunc(RRatio);
    document.getElementById('estRecov').innerHTML = wholeR;
};


