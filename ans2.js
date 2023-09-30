// console.log("Remaining time is 1 second")
// setTimeout(()=>{
//     console.log("Remaining time is 2 second")
// },2000)


let delay = 3000;
function randomNum(){
   let output= Math.floor(Math.random()*100)
    console.log(output)
}

//countdown 
function countDown(){
    let remainingTime= delay/1000;
    var interval = setInterval(function () {
        console.log("Time remaining: " + remainingTime + " seconds");
        remainingTime--;
        if(remainingTime<0){
            clearInterval(interval);
            randomNum();
        }
},1000);
}
// setTimeout(countDown,delay)
countDown()