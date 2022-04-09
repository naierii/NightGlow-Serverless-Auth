import {handlerPath} from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        path: "get-city/{city}",
        method: "get",
        cors: true,
      }
    }
  ]
}