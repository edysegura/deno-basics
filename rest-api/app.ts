import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()

router
  .get('/', ({ response }) => {
    response.body = 'Server is up and running!'
  })
  .get('/hello/:name', ({ params, response }) => {
    response.body = `Hello ${params.name}!`
  })

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

const HOST = Deno.env.get('HOST') || 'localhost'
const PORT = Deno.env.get('PORT') || 9000

console.log(`Server is up and running on http://${HOST}:${PORT}`)
await app.listen(`${HOST}:${PORT}`)
