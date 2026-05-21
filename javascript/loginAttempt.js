function attempt(i) {
    if (i === 1) {
        console.log('Login successful');
    } else if (i === 2) {
        console.log('1 attempt left before lockout');
    } else if (i === 3) {
        console.log('🔒 Account Locked — Contact support');
    }

}

attempt(1)

let maxAttempts = 3;
let failedAttempts = 0;
let accountLocked = false;

function login(password, correctPassword) {
    if (accountLocked) {
        console.log('🔒 Account Locked — Contact support');
        return;
    }

    if (password === correctPassword) {
        console.log('✅ Login successful');
        failedAttempts = 0;
    } else {
        failedAttempts++;

        if (failedAttempts < maxAttempts) {
            console.log(`❌ Wrong password. ${maxAttempts - failedAttempts} attempt${maxAttempts - failedAttempts > 1 ? 's' : ''} left`);
        } else {
            accountLocked = true;
            console.log('🔒 Account Locked — Contact support');
        }
    }
}

// Test
login('wrong', 'correct');    // ❌ Wrong password. 2 attempts left
login('wrong', 'correct');    // ❌ Wrong password. 1 attempt left
login('wrong', 'correct');    // 🔒 Account Locked
login('correct', 'correct');  // 🔒 Account Locked (still locked)