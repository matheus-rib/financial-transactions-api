import { Request, Response } from 'express'

function index (req: Request, res: Response): void {
  res.json({ appName: 'financial-transaction-api' })
}

export default {
  index,
}
