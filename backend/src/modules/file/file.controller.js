export default class FileController {
  /**
   *
   * @param {import('./file.service').default} fileService
   */
  constructor(fileService) {
    this.fileService = fileService
  }

  /**
   *
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  async getFolderInfo(request, response) {
    const { containerID } = request.params

    const info = await this.fileService.getFolderInfo(containerID)

    return response.status(200).json({
      containerID,
      info,
    })
  }

  /**
   *
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   * @returns
   */
  async createFile(request, response) {
    const { containerID } = request.params
    const { fileName } = request.body

    await this.fileService.createFile(containerID, fileName)

    const info = await this.fileService.getFolderInfo(containerID)

    return response.status(201).json({
      info,
    })
  }

  /**
   *
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  async getFile(request, response) {
    const { containerID, fileName } = request.params

    const fileInfo = await this.fileService.getFile(containerID, fileName)

    return response.status(200).json(fileInfo)
  }

  /**
   *
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   * @returns
   */
  async executeFile(request, response) {
    const { containerID, fileName } = request.params

    const commandOutput = await this.fileService.executeFile(containerID, fileName)

    return response.status(200).json(commandOutput)
  }
  /**
   *
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   * @returns
   */
  async updateFile(request, response) {
    const { containerID, fileName } = request.params
    const { content } = request.body

    const info = await this.fileService.updateFile(containerID, fileName, content)

    return response.status(200).json({
      info,
      containerID,
    })
  }

  async deleteFile(request, response) {
    const { containerID, fileName } = request.params
    await this.fileService.deleteFile(containerID, fileName)

    return response.status(204).json({
      message: `Successfully deleted file "${fileName}"`,
    })
  }
}
