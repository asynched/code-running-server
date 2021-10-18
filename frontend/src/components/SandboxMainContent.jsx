import React from 'react'

const SandboxMainContent = ({ children }) => {
  return (
    <div className="grid grid-cols-2 h-full max-h-[calc(100vh-4rem)] bg-red-500">{children}</div>
  )
}

export default SandboxMainContent
