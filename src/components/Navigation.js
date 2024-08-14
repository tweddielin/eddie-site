import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 z-50">
      <div className="container mx-auto px-4 py-6">
        <ul className="flex justify-center space-x-6 text-sm uppercase">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/bio" className="hover:text-gray-300">Bio</Link></li>
          <li><Link href="/music" className="hover:text-gray-300">Music</Link></li>
          <li><Link href="/shows" className="hover:text-gray-300">Shows</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
