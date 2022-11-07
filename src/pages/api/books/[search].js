import Book from 'models/Book'
export default async (req, res) => {
  const {
    method,
    query: { search },
  } = req
  switch (method) {
    case 'GET':
      try {
        const books = await Book.aggregate([
          {
            $search: {
              index: 'ngram_search',
              autocomplete: {
                query: search,
                path: 'searchName',
                fuzzy: {
                  maxEdits: 1,
                },
                tokenOrder: 'sequential',
              },
            },
          },
          {
            $limit: 50,
          },
        ])

        /*
        const books = await Book.aggregate([
          {
            $search: {
              index: 'default',
              compound: {
                must: [
                  {
                    text: {
                      query: search,
                      path: 'searchName',
                      fuzzy: {
                        maxEdits: 1,
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            $limit: 50,
          },
        ])
        */
        if (!books) {
          return res.status(400).json({ success: false })
        }
        return res.status(200).json(books)
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }
    default:
      return res.status(400).json({ success: false })
  }
}
