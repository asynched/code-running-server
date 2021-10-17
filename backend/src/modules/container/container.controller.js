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
      containerID: folderName,
      path: folderPath,
      folderName: folderName,
      files: ['index.js'],
    })
  }
}
