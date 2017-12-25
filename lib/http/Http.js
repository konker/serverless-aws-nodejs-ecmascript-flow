// @flow

import type { HttpEventInput, HttpRequest, HttpResponse } from './types';


/**
 * [TODO: comments]
 */
export function parseRequest(input: HttpEventInput): HttpRequest {
  return {
    httpMethod: input.httpMethod,
    query: input.queryStringParameters || {},
    body: JSON.parse(input.body || '{}'),
    headers: input.headers || {},
    params: input.pathParameters || {},
    path: input.path || '',
  };
};

/**
 * [TODO: comments]
 */
export function createResponse(body: Object, statusCode: number, headers: Object = {}): HttpResponse {
  const responseHeaders =
    Object.assign(
      { 'Content-Type': 'application/json' },
      headers
    );

  return {
    headers: responseHeaders,
    body: JSON.stringify(body),
    statusCode,
  }
};
