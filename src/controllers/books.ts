import { Request, Response } from 'express'

const arr = [
    { title: 'a', author: 'a author', price: 1000 }, { title: 'a', author: 'a author', price: 1000 }, { title: 'a', author: 'a author', price: 1000 }, { title: 'a', author: 'a author', price: 1000 }, { title: 'a', author: 'a author', price: 1000 }, { title: 'a', author: 'a author', price: 1000 }, { title: 'a', author: 'a author', price: 1000 }
]

export default {
    GET: (req: Request, res: Response) => {
        try {
            res.json(arr)
        } 
        catch(err) {
            throw err
        }
    }
}