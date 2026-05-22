
let frequency = "often";
let impact = "major";

let severity = "";

if (frequency === "always") {

    if (impact === "blocker") {
        severity = "P0";
    }
    else if (impact === "major") {
        severity = "P1";
    }
    else if (impact === "minor") {
        severity = "P2";
    }

}
else if (frequency === "often") {

    if (impact === "blocker") {
        severity = "P1";
    }
    else if (impact === "major") {
        severity = "P2";
    }
    else if (impact === "minor") {
        severity = "P3";
    }

}
else if (frequency === "rarely") {

    if (impact === "blocker") {
        severity = "P2";
    }
    else if (impact === "major") {
        severity = "P3";
    }
    else if (impact === "minor") {
        severity = "P4";
    }
}

console.log("Bug Frequency:", frequency);
console.log("Bug Impact:", impact);
console.log("Bug Severity Level:", severity);