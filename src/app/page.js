import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/eddie-lin-on-keys.jpg"
        alt="Eddie Lin"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
        <h1 className="text-4xl font-bold mb-2">Eddie Lin</h1>
        <p className="text-xl">Keyboardist • Beatmaker • Producer</p>
      </div>
    </div>
  )
}

