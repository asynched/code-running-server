import express from 'express'

/**
 * @typedef AppFactoryOptionsType
 *
 * @property {express.Router} router
 * @property {Array<express.NextFunction | [string, express.NextFunction][]>} middlewares
 * @property {number} port
 * @property {() => void} onStart
 */

export default class AppFactory {
  /**
   *
   * @param {AppFactoryOptionsType} options
   * @returns
   */
  static getApp({ router = null, middlewares = [], port = 3333, onStart = null }) {
    const app = express()

    for (const middleware of middlewares) {
      if (Array.isArray(middleware)) {
        app.use.apply(app, middleware)
      } else {
        app.use(middleware)
      }
    }

    app.use('/', router)

    return {
      start: () => {
        app.listen(port, onStart)
      },
    }
  }
}
