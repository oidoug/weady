import api from '../src/service/api'

it("creates api instace", () => {
  expect(api).toBeDefined()
})

describe('api response', () => {
  it("connects to current weather api endpoint", async () => {
    const result = await api.get("/weather", {
      params: {
        q: "Curitiba"
      }
    })
    console.log(result)
    expect(result.status).toEqual(200)
  })
})