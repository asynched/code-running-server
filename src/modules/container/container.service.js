import fs from 'fs/promises'
import path from 'path'
import { v4 as uuid } from 'uuid'

export default class ContainerService {
  static #ROOT_PATH = path.join(process.cwd(), 'containers')

  async createContainer() {
    const folderName = uuid()
    const folderPath = path.join(ContainerService.#ROOT_PATH, folderName)

    await fs.mkdir(folderPath)
    await fs.writeFile(path.join(folderPath, 'index.js'), 'console.log("Hello, world!");')

    return {
      folderName,
      folderPath,
    }
  }

  async getContainerInfo(containerID) {
    const folderPath = path.join(ContainerService.#ROOT_PATH, containerID)
    const files = await fs.readdir(folderPath)

    return {
      files,
      folderPath,
    }
  }
}
