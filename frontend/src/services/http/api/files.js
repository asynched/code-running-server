import api from '.'

export const getFolderInfo = async (containerID, fetch = api) => {
  const { data } = await fetch.get(`/container/${containerID}/files`)
  return data
}

export const getRunFileLogs = async (containerID, fileName, fetch = api) => {
  const { data } = await fetch.get(`/container/${containerID}/files/${fileName}/run`)
  return data
}

export const updateFile = async (containerID, fileName, content, fetch = api) => {
  const { data } = await fetch.put(`/container/${containerID}/files/${fileName}`, {
    content,
  })

  return data
}
