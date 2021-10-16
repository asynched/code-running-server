import { Router } from 'express'
import ContainerModule from '../modules/container/container.module'

const router = Router()

router.get('/container', ContainerModule.createContainer)
router.get('/container/:containerID', ContainerModule.getContainerInfo)

export default router
