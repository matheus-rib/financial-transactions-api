import * as request from 'supertest'
import app from '../../../src/app'

beforeAll(async () => {
  await app.databaseConnection
})

afterAll(async () => {
  await (await app.databaseConnection).close()
})

it('should return app name on healthcheck route', async () => {
  const { body, status } = await request(app.express).get('/')

  expect(status).toBe(200)
  expect(body).toHaveProperty('appName')
  expect(body.appName).toBe('financial-transactions-api')
})
