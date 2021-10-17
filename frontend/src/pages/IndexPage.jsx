import React from 'react'
import { useHistory } from 'react-router-dom'
import { createContainer } from '../services/http/api/container'

const IndexPage = () => {
  const history = useHistory()

  const handleCreateContainerClick = async () => {
    const data = await createContainer()
    history.push(`/container/${data.containerID}`)
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-dracula-background">
      <h1 className="text-8xl font-bold tracking-tighter leading-loose text-dracula-pink">
        Code running server
      </h1>
      <p className="mb-8 text-2xl text-gray-400">
        A sandbox environment where you can run your projects inside the browser
      </p>
      <button
        onClick={handleCreateContainerClick}
        className="py-2 px-4 text-white text-xl bg-dracula-pink rounded-lg font-bold transition hover:bg-dracula-purple"
      >
        Create project
      </button>
    </div>
  )
}

export default IndexPage
