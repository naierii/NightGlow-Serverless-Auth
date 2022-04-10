import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event:APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const requestBody = event.body
    const parsedBody = JSON.parse(requestBody || "")
    
    return{
      statusCode: 200,
      body:`sup ${parsedBody?.name}`
    }
  } catch (error) {
    return{
      statusCode:500,
      body: "An error has occured.",
    }
  }
}

export const main = handler