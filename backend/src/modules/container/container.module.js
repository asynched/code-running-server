import ModuleFactory from '../../lib/module.factory'
import ContainerController from './container.controller'
import ContainerService from './container.service'
import { GenericFallbackController } from '../../lib/fallback.controller'

const ContainerModule = ModuleFactory.getModule({
  controller: ContainerController,
  fallback: GenericFallbackController.handle,
  services: [ContainerService],
})

export default ContainerModule
