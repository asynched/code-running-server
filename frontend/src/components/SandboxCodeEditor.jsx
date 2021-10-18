import React, { useContext } from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/keymap/sublime'

import { sandboxActions, SandboxContext } from '@contexts/SandboxContext'

const SandboxCodeEditor = () => {
  const { state, dispatch } = useContext(SandboxContext)

  return (
    <CodeMirror
      className="col-span-3 border-l border-gray-700"
      value={state.activeFile.content}
      options={{
        mode: 'javascript',
        theme: 'dracula',
        keyMap: 'sublime',
        lineNumbers: true,
        autocorrect: true,
        lineWrapping: true,
      }}
      onChange={(_editor, _data, value) =>
        dispatch({ type: sandboxActions.SET_EDITED_TEXT, payload: value })
      }
    />
  )
}

export default SandboxCodeEditor
