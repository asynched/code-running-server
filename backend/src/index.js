import express from 'express'
import cors from 'cors'
import router from './routes'
import ApplicationFactory from './lib/application.factory'

const app = ApplicationFactory.getApp({
  port: process.env.PORT || 3333,
  router: router,
  middlewares: [express.json(), cors()],
  onStart: () => {
    console.log('Application is up, server url is: "http://localhost:%s"', process.env.PORT || 3333)
  },
})

app.start()
