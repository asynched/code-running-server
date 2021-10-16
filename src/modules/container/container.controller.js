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

    const files = await this.containerService.getContainerInfo(containerID)

    return response.status(200).json({
      containerID,
      files,
    })
  }
}
