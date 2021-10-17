import api from '.'

export const getFolderInfo = async (containerID, fetch = api) => {
  const { data } = await fetch(`/container/${containerID}/files`)
  return data
}
