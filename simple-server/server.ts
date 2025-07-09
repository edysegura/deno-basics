Deno.serve(async (_req: Request) => {
  const file = await Deno.readFile('index.html')
  return new Response(file, {
    headers: { 'content-type': 'text/html' },
  })
})

// deno run --allow-net --allow-read server.ts
// localhost:8000
