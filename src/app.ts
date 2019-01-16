import Koa from 'koa'

const app:any = new Koa()

app.use(async(ctx: any) => {
  ctx.body = "hello world"
})

app.listen(3000, (err: EvalError) => {
  if (err) {
    console.error(err)
  } else {
    console.log('runung at localhost:3000')
  }
})
