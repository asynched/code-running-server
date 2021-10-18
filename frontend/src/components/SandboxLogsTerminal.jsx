import React, { useContext } from 'react'
import { SandboxContext } from '@contexts/SandboxContext'

const SandboxLogsTerminal = () => {
  const { state } = useContext(SandboxContext)

  return (
    <div>
      {state.logs.map((log) => (
        <React.Fragment>
          <p className="text-dracula-green text-sm">$ {log.command}</p>
          <pre className="mb-4 text-dracula-foreground whitespace-pre-wrap">
            {log.commandOutput}
          </pre>
        </React.Fragment>
      ))}
    </div>
  )
}

export default SandboxLogsTerminal
