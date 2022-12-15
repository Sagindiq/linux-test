import dotenv from 'dotenv'
import express from 'express'
import ejs from 'ejs'
import path from 'path'

dotenv.config({path: 'api.env'})
const PORT = process.env.PORT || 8000
import homeRouter from './routes/home.router'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(homeRouter)

app.use(express.static(path.join(__dirname, '/public')))

app.listen(PORT, () => {console.log(PORT)})