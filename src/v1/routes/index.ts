import express, { Response, Request, NextFunction } from "express"
const router = express.Router();

router.get('/checkstatus', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: 'success',
    message: 'api ok'
  })
})

router.get('/api/users', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: 'success api',
    message: 'api ok',
    metadata: [
      {
        name: 'Dung Nguyen',
        age: 40
      }
    ]
  })
})

export default router;