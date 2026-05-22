
let responseTimes = [120, 340, 560, 450, 800, 230, 510, 150];
const SLA_THRESHOLD = 500;

let index = 0;
let min = responseTimes[0];
let max = responseTimes[0];
let total = 0;
let breachedCount = 0;

while (index < responseTimes.length) {

    let currentTime = responseTimes[index];

    if (currentTime < min) {
        min = currentTime;
    }

    if (currentTime > max) {
        max = currentTime;
    }


    total += currentTime;

    if (currentTime > SLA_THRESHOLD) {
        breachedCount++;
    }

    index++;
}

let average = total / responseTimes.length;

console.log("===== API Performance Report =====");
console.log("Response Times:", responseTimes);
console.log("Minimum Response Time:", min + " ms");
console.log("Maximum Response Time:", max + " ms");
console.log("Average Response Time:", average.toFixed(2) + " ms");
console.log("SLA Breaches (>500ms):", breachedCount);