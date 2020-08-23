/**
 * Date format helper
 */
import moment from 'moment'

export const adjustedDate = (date: Date, timezoneInSec: number) => {
  // get the timezone offset from local time in minutes
  const newDate = moment(date).add(timezoneInSec, 'seconds').toDate()
  // convert the difference to milliseconds, add to date, and make a new Date
  return newDate;
}

export const hourMinutesFormat = (date: Date) => {
  return `${date.getHours()}:${date.getMinutes()}`
}