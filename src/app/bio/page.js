import Image from 'next/image'

export default function Bio() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Biography</h1>
      <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/3">
          <Image
            src="/images/eddie-lin-addidas.jpg"
            alt="Eddie Lin"
            width={400}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-4">
          <p>
            Eddie Lin is a keyboardist, beatmaker, and producer based in Chicago and New York City.
            Born and raised in Taiwan, Eddie began playing piano at the age of seven. Moving to the US in 2016, he started
            playing in the Chicago local music scenes.
          </p>
          <p>
            After years playing in bands, absorbing nutrition and influences from different genres, he began to dabble his hands in his own stuff and music production after pandemic hit hard in 2020. Eddie's music seamlessly blends elements of jazz, hip hop, and electronic music.
          </p>
          <p>
            Eddie continues to push the boundaries of modern jazz and electronic music,
            creating innovative sounds that captivate audiences around the world.
          </p>
        </div>
      </div>
    </div>
  )
}
