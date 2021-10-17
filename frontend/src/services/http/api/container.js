import api from '.'

export const createContainer = async (fetch = api) => {
  const { data } = await fetch.get('/container')
  return data
}
