function retry(testName, retrynumber = 50, delay=1000){
    console.log(testName+' '+ retrynumber +' ' + delay)
}

retry('Checking');
retry('Checking',70,1000);