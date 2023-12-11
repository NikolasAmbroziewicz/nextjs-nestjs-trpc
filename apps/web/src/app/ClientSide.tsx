'use client'
import { useEffect, useState } from 'react'

import { trpc } from "./trpc"

export default function ClientSide() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    trpc.hello.query({}).then((res) => {
      setGreeting(res)
    })
  })

  return <div>Client: {greeting}</div>
}