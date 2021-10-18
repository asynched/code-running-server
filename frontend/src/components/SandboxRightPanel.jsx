import React from 'react'

const SandboxRightPanel = ({ children }) => {
  return (
    <div className="col-span-2 p-2 whitespace-pre-wrap border-l border-gray-700 bg-dracula-background overflow-y-auto w-full">
      {children}
    </div>
  )
}

export default SandboxRightPanel
