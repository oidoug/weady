import { adjustedDate, hourMinutesFormat } from '../src/service/date'

describe('date format helper', () => {
  it("adds timezone in seconds to given date", async () => {
    const date = new Date("2021/01/01 23:45")
    const timezoneInSec = -5 * 60 * 60
    const expectedDate = new Date("2021/01/01 18:45")

    expect(adjustedDate(date, timezoneInSec).toString()).toMatch(expectedDate.toString())
  })

  it("formats date", () => {
    expect(hourMinutesFormat(new Date("2021/01/01 18:45"))).toBe("18:45")
  })
})