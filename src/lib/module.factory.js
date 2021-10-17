/**
 * @template T Module type
 * @template S Services type
 * @typedef ModuleFactoryOptionsType
 *
 * @property {T} controller Module's controller
 * @property {Array<S>} services List of controller services
 */

export default class ModuleFactory {
  /** Creates a new instance of a given module
   * @template T Module type
   * @template S Services type
   * @param {ModuleFactoryOptionsType<T, S>} options Module options
   * @returns {InstanceType<T>} Instance of the given module
   */
  static getModule({ controller, services }) {
    const instantiatedServices = services.map((service) => new service())
    const instance = new controller(...instantiatedServices)

    ModuleFactory.#bindControllerMethods(controller, instance)

    return instance
  }

  /**
   * @template T
   * @param {T} baseClass
   * @param {InstanceType<T>} controller
   */
  static #bindControllerMethods(baseClass, controller) {
    Object.getOwnPropertyNames(baseClass.prototype)
      .filter((method) => method !== 'constructor')
      .forEach((method) => {
        controller[method] = controller[method].bind(controller)
      })
  }
}
