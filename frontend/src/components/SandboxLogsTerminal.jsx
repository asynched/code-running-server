import React, { useContext } from 'react'
import { SandboxContext } from '@contexts/SandboxContext'

const SandboxLogsTerminal = () => {
  const { state } = useContext(SandboxContext)

  return (
    <div>
      {state.logs.map((log) => (
        <React.Fragment>
          <p className="text-dracula-green">$ {log.command}</p>
          <pre className="text-dracula-foreground">{log.commandOutput}</pre>
        </React.Fragment>
      ))}
    </div>
  )
}

export default SandboxLogsTerminal
