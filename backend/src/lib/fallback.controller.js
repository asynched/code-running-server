export default class FallbackController {
  static handle(callback) {
    return null
  }
}

export class GenericFallbackController extends FallbackController {
  static handle(callback) {
    /**
     *
     * @param {import('express').Request} request
     * @param {import('express').Response} response
     */
    const handler = async (request, response) => {
      try {
        return await callback(request, response)
      } catch (error) {
        return response.status(400).json({
          error,
        })
      }
    }

    return handler
  }
}
