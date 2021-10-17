import React, { useContext } from 'react'
import { SandboxContext, sandboxActions } from '../context/SandboxContext'

const SandboxFileSidebar = () => {
  const { state, dispatch } = useContext(SandboxContext)

  const handleFileClick = (fileName) => {
    const activeFile = state.pageInfo.info.files.find((file) => file.fileName === fileName)
    dispatch({ type: sandboxActions.SET_ACTIVE_FILE, payload: activeFile })
  }

  return (
    <div className="p-2 text-dracula-foreground">
      <h1 className="font-bold">Files</h1>
      <div className="flex flex-col">
        {state.pageInfo.info.files.map((file) => (
          <button
            key={file.fileName}
            onClick={() => handleFileClick(file.fileName)}
            className={`py-1 px-2 text-left text-sm ${
              file.fileName === state.activeFile.fileName
                ? 'font-bold bg-black bg-opacity-25 rounded'
                : ''
            }`}
          >
            {file.fileName}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SandboxFileSidebar
