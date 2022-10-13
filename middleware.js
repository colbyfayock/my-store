import { MiddlewareRequest } from "@netlify/next";

import shippingRates from 'data/shipping-rates.json';

export async function middleware(nextRequest) {
  const request = new MiddlewareRequest(nextRequest);
  const response = await request.next();

  const shipping = shippingRates.find(({ country }) => country === request.geo.country);
  console.log('shipping', shipping);

  return response;
}