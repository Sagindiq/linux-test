import { Response } from 'express'

export default {
    GET: (_, res: Response) => {
        try {
            res.render('home.ejs')
        } catch (error) {
            throw error
        }
    }
}