import React, { useContext } from 'react'
import { SandboxContext } from '../context/SandboxContext'

const SandboxHeadingInfo = () => {
  const { state } = useContext(SandboxContext)

  return (
    <div className="border-b border-gray-700 p-4 flex items-center justify-between text-dracula-foreground">
      <h1 className="font-bold">Container ID: {state.pageInfo.containerID}</h1>
      <button className="py-1 px-8 bg-dracula-green text-dracula-background">Run</button>
    </div>
  )
}

export default SandboxHeadingInfo
