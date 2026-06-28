function buildEndPoint(baseUrl: string, path: string): string {
    return baseUrl + path;
}

function isSuccessCode(statusCode: number): boolean {

    return statusCode >= 200 && statusCode <= 300;

}

function logTestStep(step: string): void {
    console.log(step)
}

let baseUrl = buildEndPoint('http/service.com', 'login');
console.log(baseUrl);

let status = isSuccessCode(200);
console.log(status);

logTestStep('Nevigation to login')