import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFolderInfo } from '../services/http/api/files'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/keymap/sublime'

const SandboxPage = () => {
  const [pageData, setPageData] = useState(null)
  const [activeFile, setActiveFile] = useState({
    fileName: null,
    content: null,
  })
  const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFolderInfo(params.containerID)
      setPageData(data)
    }

    fetchData()
  }, [params.containerID])

  useEffect(() => {
    if (pageData) {
      setActiveFile((activeFile) => (activeFile.fileName ? activeFile : pageData.info.files[0]))
    }
  }, [pageData])

  if (!pageData) {
    return (
      <div className="w-full h-screen bg-dracula-background flex flex-col items-center justify-center">
        <h1 className="text-4xl text-dracula-foreground">Loading...</h1>
      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-dracula-background font-code overflow-hidden">
      <div className="border-b border-gray-700 p-4 flex items-center justify-between text-dracula-foreground">
        <h1 className="font-bold">Container ID: {pageData.containerID}</h1>
        <button className="py-1 px-8 bg-dracula-green text-dracula-background">Run</button>
      </div>
      <div className="grid grid-cols-2 h-full">
        <div className="grid grid-cols-4">
          <div className="p-2 text-dracula-foreground">
            <h1 className="font-bold">Files</h1>
            {pageData.info.files.map((file) => (
              <p className={`text-sm ${file.fileName === activeFile.fileName ? 'font-bold' : ''}`}>
                {file.fileName}
              </p>
            ))}
          </div>
          <CodeMirror
            className="col-span-3 border-l border-gray-700"
            value={activeFile.content}
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
          $ node index.js
        </div>
      </div>
    </div>
  )
}

export default SandboxPage
