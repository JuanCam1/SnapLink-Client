import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/create-link')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home/create-link"!</div>
}
