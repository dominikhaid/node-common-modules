import moment from 'moment';
// @ts-ignore
import type Diff from 'moment/ts3.1-typings/moment';

/**
 * Compares the given dateTime string with the acutal dateTime and returns the difference.
 * @param {string} dateTime - dateTime passed to moment
 * @param {string} unit - Unit the get the diff in defaults to 'minutes'
 * @returns {IDiffDateToNow}
 */
export async function getDateTimeDiff(
  dateTime: string,
  unit: Diff = 'minutes'
): Promise<IDiffDateToNow> {
  const dateTimeNow = moment(Date.now()).format('YYYY-MM-DDTHH:mm:ssZ');
  const diff = Math.abs(moment(dateTime).diff(dateTimeNow, unit));
  return {
    dateTime: dateTime,
    dateTimeNow: dateTimeNow,
    dateTimeDiff: diff
  };
}
