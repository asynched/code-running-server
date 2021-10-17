/**
 * @callback FallbackControllerCallbackType
 *
 * @param {import('express').Request} request Express' request
 * @param {import('express').Response} response Express' response
 * @returns {(Promise<any> | any)} HTTP response
 */

/**
 * @callback FallbackControllerType
 * @param {FallbackControllerCallbackType} callback
 * @returns {FallbackControllerCallbackType} A fallback handler for the original method
 */

/**
 * @template T Module type
 * @template S Services type
 * @typedef ModuleFactoryOptionsType
 *
 * @property {T} controller Module's controller
 * @property {Array<S>} services List of controller services
 * @property {FallbackControllerType?} fallback Fallback controller
 */

export default class ModuleFactory {
  /** Creates a new instance of a given module
   * @template T Module type
   * @template S Services type
   * @param {ModuleFactoryOptionsType<T, S>} options Module options
   * @returns {InstanceType<T>} Instance of the given module
   */
  static getModule({ controller, services, fallback }) {
    const instantiatedServices = services.map((service) => {
      if (Array.isArray(service)) {
        const [serviceClass, ...args] = service
        return new serviceClass(...args)
      }

      return new service()
    })
    const instance = new controller(...instantiatedServices)

    ModuleFactory.#bindControllerMethods(controller, instance, fallback)

    return instance
  }

  /**
   * @template T
   * @param {T} baseClass
   * @param {InstanceType<T>} controller
   * @param {FallbackControllerType} fallback
   */
  static #bindControllerMethods(baseClass, controller, fallback) {
    Object.getOwnPropertyNames(baseClass.prototype)
      .filter((method) => method !== 'constructor')
      .forEach((method) => {
        if (fallback) {
          controller[method] = fallback(controller[method].bind(controller))
          return
        }

        controller[method] = controller[method].bind(controller)
      })
  }
}
