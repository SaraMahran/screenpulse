import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function HomePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1 className="text-2xl">Welcome to Screenpulse</h1>
        </CardTitle>
        <CardDescription>
          Film and TV audience insights, coming soon.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link to="/app">Explore Screenpulse</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
