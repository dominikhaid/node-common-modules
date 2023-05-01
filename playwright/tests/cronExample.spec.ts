import {expect} from '@playwright/test';
import {test} from './musikrechere.ts';
import {conditionalWriteToLog, tryCatchAndLog} from '../utils/loggin.ts';
import {getDateTimeDiff} from '../utils/dateUtils.ts';
import {clickElementsByRoleAndText} from '../utils/page.ts';

test('Musikrechere ist aktuell', async ({
  page,
  maxTimeDiff,
  elementsToClickBeforeTest,
  unitOfTime,
  testData
}, testInfo) => {
  for await (const data of testData) {
    let errorMsg;
    const logFolder = `${process.cwd()}\\logs\\`;

    const openUrl = await tryCatchAndLog(
      logFolder,
      testInfo.title,
      page.goto(data.url),
      `URL not reachable: ${data.url}\n\r`
    );
    if (openUrl === false) {
      test.fail();
      continue;
    }

    const openPlaybar = await tryCatchAndLog(
      logFolder,
      testInfo.title,
      clickElementsByRoleAndText(page, elementsToClickBeforeTest),
      `Can not open Playbar: ${data.url}\n\r`
    );
    if (openPlaybar === false) {
      test.fail();
      continue;
    }

    const playlistItems = page
      .locator('#panel-playlist')
      .locator('.playlist-tracks')
      .getByRole('listitem');

    const lastPlayed = playlistItems
      .first()
      .getByRole('time');

    const dateTimeFromElement = await tryCatchAndLog(
      logFolder,
      testInfo.title,
      lastPlayed.evaluate(
        e => (e as HTMLTimeElement).dateTime
        ),  `Playlist empty: ${data.url}\n\r`);
   if (dateTimeFromElement === false) {
      test.fail();
      continue;
    }

    const {dateTime, dateTimeNow, dateTimeDiff} = await getDateTimeDiff(
      dateTimeFromElement,
      unitOfTime
    );

   const playlistItemSize = await playlistItems.count();
    const logData = `${
      data.url
    } ITEMS: ${playlistItemSize} HTML: ${dateTime} NOW: ${dateTimeNow} DIFFERENCE: ${dateTimeDiff}${unitOfTime} ${
      errorMsg ? 'ERROR: ' + errorMsg : ''
    }\n\r`;
    
    console.log(logData);
    conditionalWriteToLog(
      logFolder,
      testInfo.title,
      logData,
      dateTimeDiff < maxTimeDiff
    );

    expect(dateTimeDiff).toBeLessThanOrEqual(maxTimeDiff);
    expect(playlistItemSize).toBeGreaterThanOrEqual(2);
  }
});
// log stderr if expect fails