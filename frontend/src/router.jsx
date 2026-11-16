import { createRouter } from '@tanstack/react-router'
import rootRoute from './routes/rootRoute'
import homeRoute from './routes/homeRoute'
import characterRoute from './routes/characterRoute'

const routeTree = rootRoute.addChildren([homeRoute, characterRoute])

const router = createRouter({
  routeTree,
})

export default router