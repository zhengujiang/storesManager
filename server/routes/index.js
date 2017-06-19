import Router from 'koa-router'
import auth from './auth'

const router = new Router()

router.use(auth.routes(), auth.allowedMethods())

export default router