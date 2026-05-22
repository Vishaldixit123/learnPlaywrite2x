
let attemp = 0;
let retry = 5;
let success = false;

do {
    let randomValue = Math.random();

    if (randomValue > 0.6) {
        success = true;
        console.log(`Attempt ${attemp}: ✅ SUCCESS (Response 200 OK)`);
        break;
    } else {
        console.log(`Attempt ${attemp}: ❌ FAILED (Timeout/Error)`);
    }
    attemp++
} while (!success && attemp < 5)