import { APIGatewayProxyHandler } from "aws-lambda";

const handler: APIGatewayProxyHandler = async () => {
    return {
        statusCode: 200,
        body: "Hello World",
    };
};

export { handler };
