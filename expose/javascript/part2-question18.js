function repeatTimer(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
};


const intervalTimer = setInterval(repeatTimer, 1000);