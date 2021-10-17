import { Router } from 'express'
import ContainerModule from '../modules/container/container.module'

const router = Router()

router.get('/container', ContainerModule.createContainer)
router.get('/container/:containerID', ContainerModule.getContainerInfo)
router.post('/container/:containerID/file', ContainerModule.createFile)
router.get('/container/:containerID/file/:fileName', ContainerModule.getFile)

export default router
