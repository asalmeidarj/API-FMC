import express from 'express'
import { Request, Response } from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    return res.send('Servidor Conectado!')
})



export const indexRouter = router;