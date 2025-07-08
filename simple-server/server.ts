Deno.serve((_req: Request) => {
  return new Response('Hello, World!')
})

// deno run --allow-net server.ts
// localhost:8000
