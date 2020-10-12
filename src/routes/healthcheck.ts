import { Router } from 'express'

// Controllers
import HealthCheckController from '../controllers/HealthcheckController'

const router = Router()

router.get('/', HealthCheckController.index)

export default router
