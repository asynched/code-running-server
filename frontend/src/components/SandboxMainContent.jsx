import React from 'react'

const SandboxMainContent = ({ children }) => {
  return <div className="grid grid-cols-5 h-full max-h-[calc(100vh-4rem)]">{children}</div>
}

export default SandboxMainContent
