interface apiResponse {
    readonly statusCode: number; //cannot be modified now
    body: string;
    headers?: object;     //?- optional
    responseTime?: number;

}

let response: apiResponse = {
    statusCode: 200,
    body: '{"user","admin"}',
    headers: {}
}

console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers);

//response.statusCode = 404; - can't assigned again as it is read only property
response.body = "blablabla"; //it is assigned again 