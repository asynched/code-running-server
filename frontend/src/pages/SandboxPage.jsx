import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/keymap/sublime'

const SandboxPage = () => {
  return (
    <div className="w-full h-screen bg-dracula-background font-code overflow-hidden">
      <div className="border-b border-gray-700 p-4 flex items-center justify-between text-dracula-foreground">
        <h1 className="font-bold">Container ID: db5f543a-3019-42ce-95ec-2998870a2ff6</h1>
        <button className="py-1 px-8 bg-dracula-green text-dracula-background">Run</button>
      </div>
      <div className="grid grid-cols-2 h-full">
        <div className="grid grid-cols-4">
          <div className="p-2 text-dracula-foreground">Files</div>
          <CodeMirror
            className="col-span-3 border-l border-gray-700"
            value={`let name = 'Eder'\nconsole.log('Hello, %s!', name)\n`}
            options={{
              mode: 'javascript',
              theme: 'dracula',
              keyMap: 'sublime',
              lineNumbers: true,
              autocorrect: true,
            }}
            onChange={(editor, data, value) => {}}
          />
        </div>
        <div className="p-2 border-l border-gray-700 bg-dracula-background text-dracula-green font-code">
          $ terminal output
        </div>
      </div>
    </div>
  )
}

export default SandboxPage
