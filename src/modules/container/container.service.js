import fs from 'fs/promises'
import path from 'path'
import { v4 as uuid } from 'uuid'

export default class ContainerService {
  static #ROOT_PATH = path.join(process.cwd(), 'containers')

  /**
   * Creates a new container
   * @returns The container's info
   */
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

  /**
   * Creates a file within a given container
   * @param {string} containerID Container's ID
   * @param {string} fileName New file name
   */
  async createFile(containerID, fileName) {
    const folderPath = path.join(ContainerService.#ROOT_PATH, containerID)
    const filePath = path.join(folderPath, fileName)

    await fs.writeFile(filePath, '')
  }

  /**
   * Gets the info from the container
   * @param {string} containerID Container's ID
   * @returns Container's info
   */
  async getContainerInfo(containerID) {
    const folderPath = path.join(ContainerService.#ROOT_PATH, containerID)
    const files = await fs.readdir(folderPath)

    return {
      files,
      folderPath,
      folderName: containerID,
    }
  }
}
