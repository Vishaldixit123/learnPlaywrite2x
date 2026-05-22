testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

let passCount = 0;
let failCount = 0;
let skipCount = 0;

for (let i = 0; i <= testResults.length; i++) {
    if (testResults[i] === 'pass') {
        passCount++;
    } else if (testResults[i] === 'fail') {
        failCount++;
    } else if (testResults[i] === 'skip') {
        skipCount++;
    }
}

let totalTests = testResults.length;

let passRate = (passCount / totalTests) * 100;

let verdict = null;

if (failCount === 0) {
    verdict = 'ready for release';
} else if (failCount <= 2) {
    verdict = 'review';
}
else if (failCount > 2) {
    verdict = 'block release';
}

console.log("===== TEST REPORT =====");
console.log("Total Tests   :", totalTests);
console.log("Passed Tests  :", passCount);
console.log("Failed Tests  :", failCount);
console.log("Skipped Tests :", skipCount);
console.log("Pass Rate     :", passRate.toFixed(2) + "%");
console.log("Verdict       :", verdict);