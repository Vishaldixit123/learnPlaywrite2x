function BugSeverity(point) {
    if (point >= 9 && point <= 10) {
        console.log('Severity: Critical — Block release')
    } else if (point >= 7 && point <= 8) {
        console.log('Severity: High')
    } else if (point >= 4 && point <= 6) {
        console.log('Severity: Medium')
    } else if (point >= 1 && point <= 3) {
        console.log('Severity: Low')
    } else {
        console.log(`${point} is Invalid`)
    }
}

BugSeverity(20)
BugSeverity(4)