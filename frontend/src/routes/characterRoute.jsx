import { createRoute } from '@tanstack/react-router'
import rootRoute from './rootRoute'
import Home from '../pages/Home'

const characterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/personagens/$slug',
  component: Home,
})

export default characterRoute