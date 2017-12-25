//@flow

import * as Http from './lib/http/Http';


export function hello(event: Object, context: Object, callback: Function) : void {
  try {
    const request = Http.parseRequest(event);

    const responseBody = {
      message: 'Hello World',
      request,
    };

    const response = Http.createResponse(responseBody, 200);
    callback(null, response);
  }
  catch (error) {
    callback(error);
  }
}
