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
            Eddie is a keyboardist/producer based in Chicago and Brooklyn. He is planning to release his debut instrumental EP: Superposition State in 2024.
            After years of music playing in live bands when the pandemic hit in 2020, he started making beats and producing music. 
            A soulful touch on the Rhodes piano, an eccentric drum groove, or an unconventional synth improvisations can be found in his music, 
            blending elements of experimental, jazz, hip hop, R&B and electronic music. 
            He is extensively influenced by Rober Glasper, Yussef Kamaal, Flying Lotus, BigYuki, Kiefer and many others. 
            
          </p>
          <p>
            Born and raised in Taiwan, Eddie began playing piano at the age of seven and playing in various bands in his young age.
            Moving to the US in 2016, he started playing in the Chicago local music scenes.
            After years being a sideman, absorbing nutritions and influences from different genres, 
            he began to work on his own stuff and music production after pandemic hit hard in 2020. 
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
