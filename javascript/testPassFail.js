// expected = "Login Successful"

// Output: ✅ Test Passed

let expected = "Login Successful"
let actual = "Login Successful"

if (expected === actual) {
    console.log('✅ Test Passed')
} else {
    console.log(' ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials')
}
expected = "Login Successful"
actual = "Login Successf"

if (expected != actual) {
    console.log(' ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials')
} 