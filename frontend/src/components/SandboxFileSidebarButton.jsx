import { SandboxContext } from '@contexts/SandboxContext'
import React, { useContext } from 'react'

const SandboxFileSidebarButton = ({ file, onClick }) => {
  const { state } = useContext(SandboxContext)

  return (
    <button
      onClick={() => onClick(file.fileName)}
      className={`py-1 px-2 text-left text-sm ${
        file.fileName === state.activeFile.fileName
          ? 'font-bold bg-black bg-opacity-25 rounded'
          : ''
      }`}
    >
      {file.fileName}
    </button>
  )
}

export default SandboxFileSidebarButton
