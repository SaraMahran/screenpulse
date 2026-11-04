import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({ component: ExplorerPage })

function ExplorerPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold">The explorer is coming</h1>
      <p className="mt-4 text-muted-foreground">
        Film and TV audience insights will live here.
      </p>
    </>
  )
}
