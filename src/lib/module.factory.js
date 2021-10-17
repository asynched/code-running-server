/**
 * @template T
 * @template S
 * @typedef ModuleFactoryOptionsType
 *
 * @property {T} controller
 * @property {Array<S>} services
 */

export default class ModuleFactory {
  /**
   * @template T
   * @template S
   * @param {ModuleFactoryOptionsType<T, S>} options
   * @returns {InstanceType<T>}
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
