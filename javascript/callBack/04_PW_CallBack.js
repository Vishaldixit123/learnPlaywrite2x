function test(testName, callback) {
    console.log(testName);
    callback();
}

// import { test } from '@playwright/test';

test("Verify Login page is working", () => {
    console.log('first test')
});
