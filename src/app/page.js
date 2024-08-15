import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaSoundcloud, FaSpotify } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/eddie-lin-on-keys.jpg"
        alt="Eddie"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
      <div className="flex items-center space-x-4 mb-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Eddie</h1>
        <div className="flex items-center space-x-4 mb-6">
          <SocialIcon href="https://www.instagram.com/yourinstagram" icon={FaInstagram} label="Instagram" />
          <SocialIcon href="https://soundcloud.com/yoursoundcloud" icon={FaSoundcloud} label="SoundCloud" />
          <SocialIcon href="https://open.spotify.com/artist/yourspotifyid" icon={FaSpotify} label="Spotify" />
        </div>
      </div>
        <p className="text-xl">Keyboardist • Beatmaker • Producer</p>
      </div>
    </div>
  )
}

function SocialIcon({ href, icon: Icon, label }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Icon className="text-white text-3xl hover:text-gray-300 transition-colors" />
    </Link>
  )
}