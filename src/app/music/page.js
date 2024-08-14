import Image from 'next/image'

export default function Music() {
  const albums = [
    { title: 'Live at The Royal Room', year: '2023', cover: '/images/album1.jpg' },
    { title: 'Infinite Playground', year: '2021', cover: '/images/album2.jpg' },
    // Add more albums as needed
  ]

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">Music</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {albums.map((album, index) => (
          <div key={index} className="text-center">
            <Image
              src={album.cover}
              alt={album.title}
              width={300}
              height={300}
              className="w-full h-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{album.title}</h2>
            <p className="text-gray-400">{album.year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
