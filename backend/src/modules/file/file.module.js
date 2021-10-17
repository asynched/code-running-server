import ModuleFactory from '../../lib/module.factory'
import { GenericFallbackController } from '../../lib/fallback.controller'
import FileController from './file.controller'
import FileService from './file.service'

const FileModule = ModuleFactory.getModule({
  controller: FileController,
  services: [FileService],
  fallback: GenericFallbackController.handle,
})

export default FileModule
