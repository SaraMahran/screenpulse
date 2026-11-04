import type { ReactNode } from 'react'
import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import styles from '@/styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Screenpulse' },
      {
        name: 'description',
        content: 'Film and TV audience insights. Foundation preview.',
      },
    ],
    links: [{ rel: 'stylesheet', href: styles }],
  }),
  component: RootLayout,
  shellComponent: RootDocument,
})

function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="border-b px-6 py-4">
        <Link to="/" className="text-lg font-semibold">
          Screenpulse
        </Link>
      </header>
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <Outlet />
      </main>
      <footer className="border-t px-6 py-4 text-sm text-muted-foreground">
        Screenpulse · Film and TV audience insights
      </footer>
    </div>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
