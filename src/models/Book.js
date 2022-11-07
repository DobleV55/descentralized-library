import { Schema, model, models } from 'mongoose'

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      unique: true,
      trim: true,
      maxlength: [40, 'Title cannot be more than 40 characters'],
    },
    isbn: {
      type: String,
      required: [true, 'Please add an ISBN'],
      unique: true,
      trim: true,
      maxlength: [13, 'ISBN cannot be more than 13 characters'],
    },
    image: {
      type: String,
      required: [true, 'Please add an image'],
      trim: true,
    },
    cid: {
      type: String,
      required: [true, 'Please add a cid'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Please add an author'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      trim: true,
      maxlength: [200, 'Description cannot be more than 200 characters'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default models.Book || model('Book', bookSchema)
