

function init() {
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const flightStatus = document.getElementById("flightStatus");
    const takeOffButton = document.getElementById("takeOff");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("abortMission");


    //init loads default settings
    //everything that says id, we need to initialize
   confirmTakeOff.addEventListener("click", function(event) {
       let confirmation = window.confirm("Confirm that shuttle is ready for takeoff");
       if (confirmation) {
           flightStatus.innerHTML = "Shuttle in flight.";
           shuttleBackground.style.backgroundColor = "blue";
           shuttleHeight.innerHTML = 10000;
       }//end of if statement
   }) //end of confirmTakeOff function
       
   takeOffButton.addEventListener("click", confirmTakeOff);
    

    function landingConfirm() {
        let alert = window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = ""
        shuttleHeight.innerHTML = "0"  
    } //end of landing function


   landingButton.addEventListener("click", landingConfirm);

    function abortConfirm() {
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.")
            if (abortConfirm) {
            flightStatus.innerHTML = "Mission aborted"
            shuttleBackground.style.backgroundColor = ""
            shuttleHeight.innerHTML = "0"
            }  // end of if statement
        } //end of abortConfirm function

    missionAbortButton.addEventListener("click", abortConfirm);

    }//end of init function
    

    window.addEventListener("load", init);