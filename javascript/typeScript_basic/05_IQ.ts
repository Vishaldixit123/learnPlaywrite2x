let responsCode: number[] = [200, 400, 401, 302, 305]

function getResponseCode(codes: number[]): number[] {

    return codes.filter(function (code: number): boolean {
        return code >= 400;
    })
}

console.log(responsCode);

let result = getResponseCode(responsCode);

console.log(result)