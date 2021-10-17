import fs from 'fs/promises'
import path from 'path'
import { v4 as uuid } from 'uuid'

export default class ContainerService {
  static ROOT_PATH = path.join(process.cwd(), 'containers')

  /**
   * Creates a new container
   * @returns The container's info
   */
  async createContainer() {
    const folderName = uuid()
    const folderPath = path.join(ContainerService.ROOT_PATH, folderName)

    await fs.mkdir(folderPath)
    await fs.writeFile(path.join(folderPath, 'index.js'), 'console.log("Hello, world!");')

    return {
      folderName,
      folderPath,
    }
  }
}
