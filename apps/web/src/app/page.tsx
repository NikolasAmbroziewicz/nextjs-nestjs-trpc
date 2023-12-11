import ClientSide from "./ClientSide"

import { trpc } from "./trpc"

export default async function Home() {
  const response = await trpc.hello.query({ name: 'Tom' })
  return (
    <>
      <ClientSide />
      <div>Server:{response}</div>
    </>
  )
}
