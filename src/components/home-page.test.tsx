import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { HomePage } from './home-page'

test('welcomes visitors and links to the explorer', async () => {
  const root = createRootRoute()
  const home = createRoute({
    getParentRoute: () => root,
    path: '/',
    component: HomePage,
  })
  const explorer = createRoute({ getParentRoute: () => root, path: '/app' })
  const router = createRouter({
    routeTree: root.addChildren([home, explorer]),
    history: createMemoryHistory({ initialEntries: ['/'] }),
  })
  render(<RouterProvider router={router} />)

  expect(
    await screen.findByRole('heading', { name: 'Welcome to Screenpulse' }),
  ).toBeVisible()
  expect(
    screen.getByRole('link', { name: 'Explore Screenpulse' }),
  ).toHaveAttribute('href', '/app')
})
