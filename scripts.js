
let shuttleBackground = "";
let shuttleHeight = "";
let flightStatus = "";
let takeOffButton = "";
let landingButton = "";
let missionAbortButton = "";
let landingConfirm = "";

function init() {
    // const shuttleBackground = document.getElementById("shuttleBackground");
    // const shuttleHeight = document.getElementById("spaceShuttleHeight");
    // const flightStatus = document.getElementById("flightStatus");
    // const takeOffButton = document.getElementById("takeOff");
    // const landingButton = document.getElementById("landing");
    // const missionAbortButton = document.getElementById("abortMission");


    //init loads default settings
    //everything that says id, we need to initialize
   function confirmTakeOff() {
       let response = window.confirm("Is the shuttle ready?");
       if (response) {
           flightStatus.innerHTML = "Shuttle in flight." //updating to this new text
           shuttleBackground.style.backgroundColor = "blue"
           shuttleHeight.innerHTML = '10000'
       } //end of if
    } //end of confirm function
   takeOffButton.addEventListener("click", confirmTakeOff);

   function landingConfirm() {
       let alert = window.alert("The shuttle is landing. Landing gear engaged.")
       shuttleBackground.style.backgroundColor = ""
       shuttleHeight.innerHTML = "0"
   }
}
    landingButton.addEventListener("click", landingConfirm);

    function abortConfirm() {
        let abortAlert = window.confirm("Confirm that you want to abort the mission.")
        if (abortAlert) {
            flightStatus.innerHTML = "Mission aborted"
            shuttleBackground.style.backgroundColor = ""
            shuttleHeight.innerHTML = "0"
        }

    missionAbortButton.addEventListener("click", abortConfirm);

    }//end of init function
    

    window.addEventListener("load", init);