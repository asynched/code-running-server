import React, { useContext } from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/keymap/sublime'

import { SandboxContext } from '../context/SandboxContext'

const SandboxCodeEditor = () => {
  const { state } = useContext(SandboxContext)

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
      }}
      onChange={(editor, data, value) => {}}
    />
  )
}

export default SandboxCodeEditor
