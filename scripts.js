// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log('loaded: 100%');
});

function liftOff(){
    window.confirm("Confirm that the shuttle is ready for takeoff.")
    }
    let buttonT = document.getElementById("liftoffButton");
    buttonT.addEventListener("click", liftOff);