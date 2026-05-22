let isPresent = true
let isDisplayed = true
let isEnabled = false

let states = null;

if (isPresent === true && isDisplayed === true && isEnabled === true) {

    states = 'READY';
} else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    states = 'DISABLED';
} else if (isPresent === true && isDisplayed === false) {
    states = 'HIDDEN';
} else if (isPresent === false) {
    states = 'NOT FOUND';
}

let severity = isPresent === false ? 'CRITICAL' : (isDisplayed === false || isEnabled === false) ? 'WARNING' : 'Ok'

if (states === "READY") {
    console.log("Action: Safe to interact with the element.");
}
else if (states === "DISABLED") {
    console.log("Action: Wait or verify why the element is disabled.");
}
else if (states === "HIDDEN") {
    console.log("Action: Scroll or wait until the element becomes visible.");
}
else if (states === "NOT FOUND") {
    console.log("Action: Fail the test and capture screenshot/logs.");
}