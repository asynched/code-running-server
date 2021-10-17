import { exec } from 'child_process'

/**
 * Executes a terminal command an returns the `stdout` result
 * @param {string} command Command to be executed
 * @returns {Promise<string>} `stdout` output
 */
export const executeProcess = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, data) => {
      if (error) {
        reject(error)
        return
      }

      resolve(data)
    })
  })
}
