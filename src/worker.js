const origin = 'https://pingdongyeshi.com';
const routes = new Set(['/', '/food/', '/transport/', '/hours/', '/en/']);
export default {
  async fetch(request, env) {
    const u = new URL(request.url);
    if (u.hostname === 'www.pingdongyeshi.com' || (u.hostname === 'pingdongyeshi.com' && u.protocol === 'http:')) {
      return new Response(null, { status: 308, headers: { Location: origin + u.pathname + u.search } });
    }
    if (request.method !== 'GET' && request.method !== 'HEAD') return env.ASSETS.fetch(request);
    const clean = u.pathname.replace(/index\.html$/, '').replace(/\/+$/, '') + '/';
    if (routes.has(clean) && clean !== u.pathname) return new Response(null, { status: 308, headers: { Location: clean + u.search } });
    const response = await env.ASSETS.fetch(request);
    const errorAlias = /^\/(?:en\/)?404(?:\.html|\/)?$/.test(u.pathname);
    if (response.status !== 404 && !errorAlias) return request.method === 'HEAD' ? new Response(null, response) : response;
    // Fetch the canonical asset path, not /404.html: ASSETS can redirect file aliases.
    const error = await env.ASSETS.fetch(new Request(new URL('/404', u), { method: 'GET' }));
    const raw = error.status >= 300 && error.status < 400 ? '' : await error.text();
    const body = raw || '<!doctype html><html lang="en"><head><meta name="robots" content="noindex,follow"><title>Page not found · Pingtung Night Market</title></head><body><h1>404 · Page not found</h1><a href="/">中文</a> · <a href="/en/">English</a></body></html>';
    const headers = new Headers({ 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, follow' });
    return new Response(request.method === 'HEAD' ? null : body, { status: 404, headers });
  }
};
