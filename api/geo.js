import { geolocation, ipAddress } from '@vercel/edge';
export const config = { runtime: 'edge' };

export default function handler(req) {
  const geo = geolocation(req) || {};
  const ip = ipAddress(req) || 'Unknown';
  return new Response(JSON.stringify({
    ip, country: geo.country, region: geo.countryRegion, city: geo.city,
    latitude: geo.latitude, longitude: geo.longitude, postalCode: geo.postalCode
  }), {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
