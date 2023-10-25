import { logger } from 'hono/logger'

import { Hono } from 'hono'

const app = new Hono()
app.get('*', logger())

export default app
