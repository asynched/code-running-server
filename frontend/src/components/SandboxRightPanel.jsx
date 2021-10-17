import React from 'react'

const SandboxRightPanel = ({ children }) => {
  return (
    <div className="p-2 border-l border-gray-700 bg-dracula-background text-dracula-green font-code">
      {children}
    </div>
  )
}

export default SandboxRightPanel
