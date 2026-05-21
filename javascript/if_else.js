let age = 20;
if (age >= 18) {
    console.log('Allowed to vote')
} else {
    console.log('Not allow to vote')
}

let vote = true;
if (!vote) {
    console.log('No')
} else {
    console.log('Yes')
}

let loggIn = true;
let userRole = 'Author'

if (loggIn) {
    if (userRole === 'Admin') {
        console.log('You have all permission')
    } else if (userRole === 'Editor') {
        console.log('You have edit permission')
    } else if (userRole === 'Viewer') {
        console.log('You have view permission')
    } else {
        loggIn = false;
        console.log('You have No permission')

    }

}

console.log(loggIn)

if (42) {
    console.log('nUmber')
}

if (null) {
    console.log('yes')
} else {
    console.log('No')
}

if ([]) {
    console.log('yes')
} else {
    console.log('No')
}

if (0) {
    console.log('yes')
} else {
    console.log('No')
}