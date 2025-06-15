import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/list-link')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home/list-link"!</div>
}
