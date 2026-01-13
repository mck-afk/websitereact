export default {
  async fetch(request) {
    return new Response('Hello from your Cloudflare Worker!', {
      headers: { 'content-type': 'text/plain' },
    });
  },
};
