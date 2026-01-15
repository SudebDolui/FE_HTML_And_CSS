"use strict"
let time = document.getElementById('time');
let timeOne = document.getElementById('timeOne');

function testCallBack_Timeout() {
    setTimeout(() => {
        console.log("Inside Call Back");
        console.log("Start Timer");
        testCallBack_Interval();
    }, 1000);
}

function testCallBack_Interval() {
    let seconds = 10;
    let intervalId = setInterval(() => {
        if (seconds > 0) {
            seconds -= 1;
            time.innerText = "0" + seconds;
            console.log("Left Time: ", seconds);
        } else {
            clearInterval(intervalId);
            console.log("Timer Ended");
        }
    }, 1000);
}

function testCallBack_Timeout_One() {
    setTimeout(() => {
        console.log("Inside Call Back One");
        console.log("Start Timer One");
        testCallBack_Interval_One();
    }, 1000);
}

function testCallBack_Interval_One() {
    let seconds = 10;
    let intervalId = setInterval(() => {
        if (seconds > 0) {
            seconds -= 1;
            timeOne.innerText = "0" + seconds;
            console.log("Left Time: ", seconds);
        } else {
            clearInterval(intervalId);
            console.log("Timer One Ended");
        }
    }, 1000);
}

function testMicroTask() {
    queueMicrotask(() => {console.log("Inside Micro Task Queue"); testCallBack_Timeout_One();});
}

console.log("Programs Starts");
testCallBack_Timeout();
testMicroTask();