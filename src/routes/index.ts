import { Router } from 'express'

// Routes
import healthcheck from './healthcheck'

const router = Router()

router.use(healthcheck)

export default router
