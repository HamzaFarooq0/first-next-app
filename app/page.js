import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      This is My HOME Page!!!

      <p>Go to <Link href="/post">POST</Link> Page</p>

      <Image id="coming_soon" src="/soon.jpeg" alt="Coming Soon!" height={500} width={600}/>
    </>
  )
}
