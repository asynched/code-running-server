import path from 'path'
import fs from 'fs/promises'
import { executeProcess } from '../../lib/process-executor'

export default class FileService {
  static ROOT_PATH = path.join(process.cwd(), 'containers')

  /**
   * Gets a file within a container
   * @param {string} containerID Container's id
   * @param {string} fileName File name
   * @returns An object containing the folder path, filename and file content
   */
  async getFile(containerID, fileName) {
    const folderPath = path.join(FileService.ROOT_PATH, containerID)
    const fileBuffer = await fs.readFile(path.join(folderPath, fileName))
    const fileContent = await fileBuffer.toString()

    return {
      folderPath,
      fileName,
      fileContent,
    }
  }

  /**
   * Executes a Javascript file and returns it's output
   * @param {string} containerID Container's id
   * @param {string} fileName File name
   * @returns Output of the execution of the file
   */
  async executeFile(containerID, fileName) {
    const filePath = path.join(FileService.ROOT_PATH, containerID, fileName)
    const commandOutput = await executeProcess(`node ${filePath}`)
    return commandOutput
  }

  /**
   * Gets the info from the container
   * @param {string} containerID Container's ID
   * @returns Container's info
   */
  async getFolderInfo(containerID) {
    const folderPath = path.join(FileService.ROOT_PATH, containerID)
    const files = await fs.readdir(folderPath)

    return {
      files,
      folderPath,
      folderName: containerID,
    }
  }

  /**
   * Creates a file within a given container
   * @param {string} containerID Container's ID
   * @param {string} fileName New file name
   */
  async createFile(containerID, fileName) {
    const folderPath = path.join(FileService.ROOT_PATH, containerID)
    const filePath = path.join(folderPath, fileName)

    await fs.writeFile(filePath, '')
  }
}
