
const environment = "qa";

let config = {};

switch (environment) {

    case "dev":
        config = {
            baseURL: "https://dev-api.company.com",
            apiKeyPattern: "DEV-XXXX",
            timeout: 3000,
            description: "Development environment for internal testing"
        };
        break;

    case "staging":
        config = {
            baseURL: "https://staging-api.company.com",
            apiKeyPattern: "STG-XXXX",
            timeout: 5000,
            description: "Staging environment for pre-release validation"
        };
        break;

    case "qa":
        config = {
            baseURL: "https://qa-api.company.com",
            apiKeyPattern: "QA-XXXX",
            timeout: 7000,
            description: "QA environment for automation and regression testing"
        };
        break;

    case "production":
    case "prod":
        config = {
            baseURL: "https://api.company.com",
            apiKeyPattern: "PROD-SECURE-XXXX",
            timeout: 10000,
            description: "Production environment for live users"
        };
        break;

    default:
        config = {
            baseURL: "N/A",
            apiKeyPattern: "INVALID",
            timeout: 0,
            description: "Unknown environment"
        };
}

// Print configuration
console.log("===== Environment Configuration =====");
console.log("Environment:", environment);
console.log("Base URL:", config.baseURL);
console.log("API Key Pattern:", config.apiKeyPattern);
console.log("Timeout:", config.timeout + " ms");
console.log("Description:", config.description);