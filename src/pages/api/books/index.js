import { dbConnect } from 'utils/mongoose'
import Book from 'models/Book'

dbConnect()

export default async function handler(req, res) {
  const { method, body } = req
  switch (method) {
    case 'GET':
      try {
        const books = await Book.find().limit(10)
        return res.status(200).json(books)
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }
    case 'POST':
      try {
        const newBook = await Book(body)
        const savedBook = await newBook.save()
        return res.status(201).json(savedBook)
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }

    default:
      return res.status(400).json({ success: false })
  }
}
