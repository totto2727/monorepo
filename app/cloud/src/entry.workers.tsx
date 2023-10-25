import app from './entry.hono'
import { serveStatic } from 'hono/cloudflare-workers'
import qwikCityPlan from '@qwik-city-plan'
import render from './entry.ssr'
import { qwikMiddleware } from '@hono/qwik-city'

app.get('*', qwikMiddleware({ render, qwikCityPlan }))
app.get('*', serveStatic({ root: './' }))

export default app
