import { Router } from 'express'
import ContainerModule from '../modules/container/container.module'

const router = Router()

router.get('/container', ContainerModule.createContainer)
router.get('/container/:containerID', ContainerModule.getContainerInfo)
router.post('/container/:containerID/new', ContainerModule.createFile)

export default router
