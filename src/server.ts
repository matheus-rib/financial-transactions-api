import 'reflect-metadata'
import app from './app'

app.databaseConnection.then(() => {
  return app.express.listen(4000, () => {
    console.log('Server ready at http://localhost:4000/')
  })
}).catch(e => {
  console.log(e)
  process.exit(1)
})
