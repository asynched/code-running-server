import ModuleFactory from '../../lib/module.factory'
import FileController from './file.controller'
import FileService from './file.service'

const FileModule = ModuleFactory.getModule({
  controller: FileController,
  services: [FileService],
})

export default FileModule
