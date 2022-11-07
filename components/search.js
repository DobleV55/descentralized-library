import { FiSearch } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Search() {
  const [input, setInput] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (input != '') {
      router.push('?search=' + input)
      console.log('You searched for ', input)
    } else {
      router.push('/')
    }
  }, [input])

  const search = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  return (
    <div className="border-solid border-2 border-black rounded-md w-96 h-10 flex items-center px-5">
      <input
        value={input}
        onChange={search}
        className="placeholder:italic placeholder:text-gray-400 bg-transparent w-full rounded-md  shadow-sm focus:outline-none sm:text-sm"
        placeholder="Search for title, author or ISBN"
        type="text"
      />
      <button>
        <FiSearch></FiSearch>
      </button>
    </div>
  )
}
