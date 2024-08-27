import Image from 'next/image'

export default function Music() {
  const albums = [
    { 
      title: 'Superposition State', 
      year: '2024', 
      cover: '/images/superposition-state-album-cover.png', 
      type: 'image' 
    },
    { 
      title: 'Talk (Khalid) Cover - Live from Narwhal Studios', 
      year: '2021', 
      cover: 'https://www.youtube.com/embed/pVdzklaS9mE?si=YTIlmbZWmTdnwyBQ', 
      type: 'youtube'
    }
    // Add more albums as needed
  ]
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Music</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {albums.map((album, index) => (
          <div key={index} className="text-center">
            <div className="relative w-64 h-64 mx-auto">
              {album.type === 'image' ? (
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              ) : (
                <iframe
                  width="256"
                  height="256"
                  src={album.cover}
                  title={album.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              )}
            </div>
            <h2 className="text-xl font-semibold mt-4">{album.title}</h2>
            <p className="text-gray-400">{album.year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
