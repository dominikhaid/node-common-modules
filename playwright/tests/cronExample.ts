import {test as base} from '@playwright/test';

export type TestOptions = {
  maxTimeDiff: number;
  elementsToClickBeforeTest: IClickByRoleAndtext[];
  unitOfTime: string;
  testData: ITestData[];
};

export const test = base.extend<TestOptions>({
  // Define an option and provide a default value.
  // We can later override it in the config.
  maxTimeDiff: [15, {option: true}],
  unitOfTime: ['minutes', {option: true}],
  elementsToClickBeforeTest: [
    [
      {
        role: 'button',
        name: 'Einklappen Ausklappen'
      },
      {
        role: 'tab',
        name: 'Musikrecherche'
      }
    ],
    {option: true}
  ],
  testData: [
    [
      {
        title: `musikrechere_aktuell_swr1`,
        url: 'https://www.swr.de/swr1/'
      },
      {
        title: `musikrechere_aktuell_swr4`,
        url: 'https://www.swr.de/swr4/nachrichten/stuttgart/index.html'
      }
    ],
    {option: true}
  ]
});
