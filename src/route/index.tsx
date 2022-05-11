import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import Home from '@/pages/home/Home'

const routes: RouteObject[] = [
  {
    path: '/home',
    element: <Home />,
  },
]

export function RootRouter() {
  const routeEl = useRoutes(routes)

  return <>
    {routeEl}
  </>
}
