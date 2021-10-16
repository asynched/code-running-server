import ModuleFactory from '../../lib/module.factory'
import ContainerController from './container.controller'
import ContainerService from './container.service'

const ContainerModule = ModuleFactory.getModule({
  controller: ContainerController,
  services: [ContainerService],
})

export default ContainerModule
