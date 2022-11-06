import Image from 'next/image'
import { useRouter } from 'next/router'
import handler from '../pages/api/hello'

function ViewBooks() {
  const Tabs = [
    {
      name: 'Featured',
      path: '/home',
      image: 'https://covers.openlibrary.org/b/isbn/1984818546-M.jpg',
      url: 'https://ipfs.io/ipfs/QmV5djHc5zQAWyAhfGeJ7AXHQg6LkZDj4PvCoaoMxjRz43',
    },
    {
      name: 'Podcasts',
      path: '/home/podcasts',
      image: 'https://covers.openlibrary.org/b/isbn/1668001225-M.jpg',
      url: 'https://ipfs.io/ipfs/Qma3Vwh13V2QvxKa6hAJdZQmfsTBTia8UTLtUbSeSJSbj8',
    },
    {
      name: 'Charts',
      path: '/home/charts',
      image: 'https://covers.openlibrary.org/b/isbn/1668001225-M.jpg',
    },
    {
      name: 'Genres & Mood',
      path: '/home/genres-and-mood',
      image: 'https://covers.openlibrary.org/b/isbn/1668001225-M.jpg',
    },
    {
      name: 'New Releases',
      path: '/home/new-releases',
      image: 'https://covers.openlibrary.org/b/isbn/1668001225-M.jpg',
    },
    {
      name: 'Discover',
      path: '/home/discover',
      image: 'https://covers.openlibrary.org/b/isbn/1668001225-M.jpg',
    },
  ]
  return (
    <div className=" flex pl-32 pt-12 w-screen gap-5">
      {Tabs.map((tabs, index) => (
        <div className="flex flex-col items-center gap-5">
          <Image src={tabs.image} width={180} height={279}></Image>
          <p>{tabs.name}</p>
          <button
            className="w-32 h-5 bg-red-500"
            onClick={() => handler({ name: tabs.name, url: tabs.url })}
          ></button>
        </div>
      ))}
    </div>
  )
}
export default ViewBooks
