interface apiResponse {
    body: string;
    headers?: object;     //?- optional
    responseTime?: number;
}

let response: apiResponse = {

    body: "",
    headers: {}

}