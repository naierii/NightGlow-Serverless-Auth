import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler:APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  console.log(1)
  console.log(2)
  console.log(3)
  try{
    const response = {
      statusCode: 200,
      body: "sup"
    }
    return response;
  }catch(e){
    return {
      statusCode: 500,
      body: "An error has occured.",
    }
  }
}

export const main = handler