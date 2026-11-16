import { createRouter } from '@tanstack/react-router'
import rootRoute from './routes/rootRoute'
import homeRoute from './routes/homeRoute'

const routeTree = rootRoute.addChildren([homeRoute])

const router = createRouter({
  routeTree,
})

export default router