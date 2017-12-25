// @flow

export type HttpResponse = {
  headers: Object,
  body: string,
  statusCode: number,
};

export type HttpRequest = {
  httpMethod: string,
  query: Object,
  body: Object,
  headers: Object,
  params: Object,
  path: string,
}

export type HttpEventInput = {
  resource: string,
  path: string,
  httpMethod: string,
  headers: Object,
  queryStringParameters: Object,
  pathParameters: Object,
  body: string,
}
