import Image from 'next/image'
import Link from 'next/link'
import PageLayout from './PageLayout'
import { downloadCid } from '../utils/download_cid'
import { FiHeart, FiDownload, FiSearch } from 'react-icons/fi'
import Search from '../../components/Search'

export default function Home({ books }) {
  return (
    <PageLayout title="Rad Library - Home">
      <div className=" w-full h-20 pl-32 pr-48 flex items-center justify-between">
        <div className=" w-24 h-8 relative">
          <Link href="/">
            <a>
              <Image src="logo_rad.svg" layout="fill"></Image>
            </a>
          </Link>
        </div>
        <Search />
        <div className="border-solid border-2 border-[#DE3123] text-[#DE3123] rounded-md w-24 h-8 flex items-center justify-center text-xs">
          <div>SIGN IN</div>
        </div>
      </div>

      <div className="px-36 pt-40">
        <div className=" grid grid-cols-5 max-w-full gap-20">
          {books.map((book, index) => (
            <ViewBook key={index} book={book}></ViewBook>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

function ViewBook({ book }) {
  return (
    <div className="flex flex-col gap-2 w-[190px]">
      <Image
        className="hover:cursor-pointer rounded-xl"
        src={
          book.image
            ? book.image
            : `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`
        }
        width={190}
        height={280}
        alt={book.title}
        onClick={() => downloadCid({ title: book.title, cid: book.cid })}
      ></Image>
      <p>{book.title}</p>
      <p className="text-gray-400">{book.author}</p>
      <div className="flex text-x items-center gap-2">
        <FiHeart className="inline-block text-gray-400" />
        <p className="text-gray-400 pr-4">2.2K</p>
        <FiDownload className="inline-block text-gray-400 " />
        <p className="text-gray-400 ">3.7K</p>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  let books = []
  if (context.query.search) {
    const search = context.query.search
    const url = `http://localhost:3000/api/books/${search}`
    const res = await fetch(url)
    const books_searched = await res.json()
    books = books.concat(books_searched)
  } else {
    const url = `http://localhost:3000/api/books`
    const res = await fetch(url)
    books = await res.json()
  }
  return {
    props: {
      books,
    },
  }
}