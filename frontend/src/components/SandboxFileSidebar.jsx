import React, { useContext } from 'react'
import { SandboxContext, sandboxActions } from '@contexts/SandboxContext'
import SandboxFileSidebarButton from './SandboxFileSidebarButton'

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
          <SandboxFileSidebarButton key={file.fileName} file={file} onClick={handleFileClick} />
        ))}
      </div>
    </div>
  )
}

export default SandboxFileSidebar
