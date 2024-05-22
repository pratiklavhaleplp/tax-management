import { configureStore } from '@reduxjs/toolkit'
import booksAndGstrSclice from './books-and-gstr-sclice'

export const store = configureStore({
  reducer: {
    booksAndGstr: booksAndGstrSclice
  },
})

