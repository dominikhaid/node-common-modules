import cron from 'node-cron';
import {exec} from 'child_process';
import moment from 'moment';

const CRON_EXP = process.env.CRON_EXP ? process.env.CRON_EXP : '*/10 * * * *';
let cmd = process.env.CRON_CMD ? process.env.CRON_CMD : `npx playwright test`;

cron.schedule(CRON_EXP, () => {
  console.log(
    `Running every ${CRON_EXP} @${moment().format('YYYY-MM-DDTHH:mm:ssZ')}`
  );

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    if (stderr !== '') {
      console.error(`${stderr}`);
    }
    console.log(`${stdout}`);
  });
});
