let testPassPercentage = 69;

if (testPassPercentage === 100) {
    console.log("Green Build - All tests passed");
} else if (testPassPercentage >= 90 && testPassPercentage < 100) {
    console.log("Stable Build - Investigate the failures");
} else if (testPassPercentage >= 70 && testPassPercentage < 90) {
    console.log("Unstable build - Make sure test cases are reliable and investigate failures");
} else if (testPassPercentage < 70) {
    console.log("Broken Build - Block the deployment");
}

