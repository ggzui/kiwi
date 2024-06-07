import { Button } from '@kiwi/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'A Next.js app with a custom domain',
}

export default function Home() {
  return (
    <div>
      <Button>shadcn-ui</Button>
    </div>
  )
}
