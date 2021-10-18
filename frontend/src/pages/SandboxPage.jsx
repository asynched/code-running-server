import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getFolderInfo } from '../services/http/api/files'
import { SandboxContext, sandboxActions } from '../context/SandboxContext'

import SandboxCodeEditor from '../components/SandboxCodeEditor'
import SandboxFileSidebar from '../components/SandboxFileSidebar'
import SandboxHeadingInfo from '../components/SandboxHeadingInfo'
import SandboxLeftPanel from '../components/SandboxLeftPanel'
import SandboxRightPanel from '../components/SandboxRightPanel'
import SandboxMainContent from '../components/SandboxMainContent'

const SandboxPage = () => {
  const params = useParams()
  const { state, dispatch } = useContext(SandboxContext)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFolderInfo(params.containerID)
      dispatch({ type: sandboxActions.SET_PAGE_INFO, payload: data })
    }

    fetchData()
  }, [dispatch, params.containerID])

  useEffect(() => {
    if (state.loaded) {
      dispatch({ type: sandboxActions.SET_DEFAULT_ACTIVE_FILE })
    }
  }, [dispatch, state.loaded])

  if (!state.loaded) {
    return (
      <div className="w-full h-screen bg-dracula-background flex flex-col items-center justify-center">
        <h1 className="text-4xl text-dracula-foreground">Loading...</h1>
      </div>
    )
  }

  return (
    <div className="w-full h-screen max-h-screen bg-dracula-background font-code overflow-hidden">
      <SandboxHeadingInfo />
      <SandboxMainContent>
        <SandboxLeftPanel>
          <SandboxFileSidebar />
          <SandboxCodeEditor />
        </SandboxLeftPanel>
        <SandboxRightPanel>
          {state.logs.map((log) => (
            <React.Fragment>
              <p className="text-dracula-green">$ {log.command}</p>
              <pre className="text-dracula-foreground">{log.commandOutput}</pre>
            </React.Fragment>
          ))}
        </SandboxRightPanel>
      </SandboxMainContent>
    </div>
  )
}

export default SandboxPage
