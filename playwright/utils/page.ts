import {Page} from '@playwright/test';

/**
 * Clicks the given Elements
 * @param {Page} page - PlaywrightTest Page
 * @param {IClickSelector[]} elements - Array of elments to click
 * @returns void
 */
export async function clickElementsByRoleAndText(
  page: Page,
  elements: IClickByRoleAndtext[]
) {
  for (const element of elements) {
    await page.getByRole(element.role, {name: element.name}).click();
  }
}
