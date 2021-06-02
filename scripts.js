
window.addEventListener("load", function(){

   
    let imgObj = document.getElementById('rocket');
    imgObj.style.position='absolute';
    imgObj.style.left='0px';
    imgObj.style.left='0px';
    let status = document.getElementById('flightStatus');
    let shuttleHeight=document.getElementById('spaceShuttleHeight');
    let bg = document.getElementById('shuttleBackground');


    let right = this.document.getElementById('right');
    right.addEventListener("click", functio(){
        movement = Number(imgObj.style.right) + 10 + 'px';
        imgObj.style.right=movement;
    });
    
    let left = this.document.getElementById('left');
    left.addEventListener("click", function(){
        movement = Number(imgObj.style.left) - 10 + 'px';
        imgObj.style.left = movement;
    });

    let up = this.document.getElementById('up');
    up.addEventListener("click", function(){
        movement = Number(imgObj.style.up) + 10 + 'px';
        imgObj.style.up = movement;
    });

    let down = this.document.getElementByID('down');
    down.addEventListener("click", function() {
        movement = Number(imgObj.style.down) - 10 + 'px';
        imbObj.style.down = movement;
    });
    
    

    
    let takeOff = this.document.getElementByID('takeOff');
    takeOff.addEventListener("click",function(){
        result=window.confirm("Are you sure the shuttle is ready for takeoff?");
        if (result) {
            bg.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML=
            '10000';
            status.innerHTML= "Shuttle in flight";
        }
    });

    let land = this.document.getElementById('land');
    land.addEventListener("click", function (){
        bg.style.backgroundColor = 'green';
        window.alert('The shuttle is landing. Landing gear engaged.');
        shuttleHeight.innerHTML = '0';
        status.innerHTML = "Shuttle landed";
        imgObj.style.bottom = '0px';
        
    });

   let missionAbort = this.document.getElementByID('missionAbort');
   missionAbort.addEventListener("click", fuction(){
        result = window.confirm("Are you sure you want to end the mission?");
        if (result) {
            bg.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = '0';
            status.innerHTML = "Mission aborted";
            imgObj.style.bottom = "0px";
        }
   });

});
    
    

 