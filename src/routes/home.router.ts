import { Router } from 'express'
const homeRouter = Router()
import home from '../controllers/home'
import books from '../controllers/books'

homeRouter
    .get('/', home.GET)
    .get('/books', books.GET)

export default homeRouter