import Image from 'next/image'

export default function Bio() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Biography</h1>
      <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/3">
          <Image
            src="/images/eddie-lin-addidas.jpg"
            alt="Eddie"
            width={400}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-4">
          <p>
            Eddie is a keyboardist/producer based in Chicago and Brooklyn. He is planning to release his debut EP: Superposition State in 2024. 
            A soulful touch on the Rhodes piano, an eccentric drum groove, or an unconventional synth improvisation might be found in his music, or not at all. 
            His music blends elements of experimental, jazz, hip hop, R&B and electronic music, bringing possibilities to the table that are both fresh and familiar.
            He is extensively influenced by Rober Glasper, Yussef Kamaal, Flying Lotus, BigYuki, Kiefer and many others. 
            
          </p>
          <p>
            Born and raised in Taiwan, Eddie started his music journey with classical piano but soon fell in love with jazz, fusion and hip hop. 
            He had palyed in various blues/funk/rock/RnB bands and projects as a keyboardist or piano player before moving to the US in 2016. 
            When the pandemic hit hard in 2020, he started to dedicate himself in making beats and producing, opening a new chapter for him. 
            After years of being a sideman, absorbing nutrients from different genres, he is now stepping out to share his music to the world.
          </p>
          <p>
            {/* Eddie continues to blur the boundaries of music,
            creating innovative sounds that captivate audiences around the world. */}
          </p>
        </div>
      </div>
    </div>
  )
}
