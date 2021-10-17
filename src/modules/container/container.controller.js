export default class ContainerController {
  /**
   * @param {import('./container.service').default} containerService
   */
  constructor(containerService) {
    this.containerService = containerService
  }

  /**
   *
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  async createContainer(request, response) {
    const { folderName, folderPath } = await this.containerService.createContainer()

    return response.status(201).json({
      path: folderPath,
      folderName: folderName,
      files: ['index.js'],
    })
  }

  /**
   *
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   */
  async getContainerInfo(request, response) {
    const { containerID } = request.params

    const info = await this.containerService.getContainerInfo(containerID)

    return response.status(200).json({
      containerID,
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
    const fileInfo = await this.containerService.getFile(containerID, fileName)

    return response.status(200).json(fileInfo)
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

    await this.containerService.createFile(containerID, fileName)

    const info = await this.containerService.getContainerInfo(containerID)

    return response.status(201).json({
      info,
    })
  }
}
