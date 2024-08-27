import Link from 'next/link'

const tourDates = [
  { date: '2024-08-31', venue: 'Lei Flat Club', city: 'Los Angelos, CA', Link: 'https://www.instagram.com/leiflatclub/' },
  // { date: '2024-09-22', venue: 'The Jazz Gallery', city: 'New York, NY', Link: '#' },
  // { date: '2024-10-05', venue: 'SF Jazz Center', city: 'San Francisco, CA', Link: '#' },
  // { date: '2024-10-12', venue: 'The Green Mill', city: 'Chicago, IL', Link: '#' },
  // { date: '2024-10-19', venue: 'Scullers Jazz Club', city: 'Boston, MA', Link: '#' },
]

export default function Show() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Tour Dates</h1>
      <div className="max-w-3xl mx-auto">
        {tourDates.map((event, index) => (
          <div key={index} className="mb-8 p-6 bg-gray-900 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-xl font-semibold mb-2">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
                <p className="text-gray-400 mb-2">{event.venue}</p>
                <p className="text-gray-400">{event.city}</p>
              </div>
              <Link
                href={event.Link}
                className="mt-4 md:mt-0 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Link
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-xl">More dates coming soon!</p>
      </div>
    </div>
  )
}
