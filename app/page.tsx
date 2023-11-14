import Link from "next/link"

export default function Home() {

  return (
    <main className="container">
      <h1>Vod project</h1>
      <Link href="/vod">Go to vod</Link>
    </main>
  )
}
