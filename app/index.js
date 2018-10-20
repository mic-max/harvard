console.log("Hello world!");


var age = 50;
var mealTime = true;
var safeZone;
//Depending on value for mealTime, changes safeZone, which represents the safe blood sugar level 
if(mealTime == false){
  safeZone = 140;
}
else if (age <= 5){
  safeZone = 250;
}
else if(age <= 11){
  safeZone = 225;
}
else if(age <= 18){
   safezone = 200;
}
 else{
    safeZone = 180;
}
function 
