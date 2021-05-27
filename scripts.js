// Write your JavaScript code here.
// Remember to pay attention to page loading!
 

function init() {
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const flightStatus = document.getElementById('flightStatus');
    const takeOffButton = document.getElementById('takeOff');
    const landingButton = document.getElementById('landing');


    //init loads default settings
    //everything that says id, we need to initialize
   function confirmTakeOff() {
       let response = window.confirm("Is the shuttle ready?");
       if (response) {
           flightStatus.innerHTML = "Shuttle in flight."
           shuttleBackground.style.backgroundColor = "blue"
           shuttleHeight.innerHTML = '10000'
       }
   }
   takeOffButton.addEventListener("click",confirmTakeOff);

   function landingConfirm() {
       let alert = window.confirm("The shuttle is landing. Landing gear engaged.")
       shuttleBackground.style.backgroundColor = ""
       shuttleHeight.innerHTML = "0"
   }
}
    landingButton.addEventListener("click", landingConfirm);


}


    window.addEventListener("load", init);