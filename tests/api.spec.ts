import api, { getWeather } from '../src/service/api'

it("creates api instace", () => {
  expect(api).toBeDefined()
})

describe('api response', () => {
  it("gets weather response for a valid city", async () => {
    const result = await getWeather("Curitiba")
    expect(result.status).toEqual(200)
  })

  it("gets not found response for a invalid city", async () => {
    try {
      const result = await getWeather("XXX")
    } catch (error) {
      expect(error.response.status).toEqual(404)
    }
  })
})