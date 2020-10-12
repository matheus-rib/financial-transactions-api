import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import * as responseTime from 'response-time'
import { createConnection, Connection } from 'typeorm'

import routes from './routes'

class App {
  public express: express.Application
  public databaseConnection: Promise<Connection>

  public constructor () {
    this.express = express()
    this.databaseConnection = createConnection()

    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(cors())
    this.express.use(responseTime('dev'))

    this.express.use(routes)
  }
}

export default new App()
