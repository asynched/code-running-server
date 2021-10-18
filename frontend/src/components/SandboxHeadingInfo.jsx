import React, { useContext } from 'react'
import { sandboxActions, SandboxContext } from '@contexts/SandboxContext'
import { getRunFileLogs } from '@services/http/api/files'

const SandboxHeadingInfo = () => {
  const { state, dispatch } = useContext(SandboxContext)

  const handleRunButtonClick = async () => {
    const containerID = state.pageInfo.containerID
    const fileName = state.activeFile.fileName

    const data = await getRunFileLogs(containerID, fileName)
    dispatch({ type: sandboxActions.SET_LOGS, payload: data })
  }

  return (
    <div className="border-b border-gray-700 p-4 flex items-center justify-between text-dracula-foreground">
      <h1 className="font-bold">Container ID: {state.pageInfo.containerID}</h1>
      <button
        onClick={handleRunButtonClick}
        className="py-1 px-8 bg-dracula-green text-dracula-background"
      >
        Run
      </button>
    </div>
  )
}

export default SandboxHeadingInfo
