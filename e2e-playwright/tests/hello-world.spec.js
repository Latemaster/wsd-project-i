const { test, expect } = require("@playwright/test");


test("Can add a shopping list", async ({page}) => {
  await page.goto("/lists");
  const taskName = `My list:  ${Math.random()}`;
  await page.locator("input[type=text]").type(taskName);
  await page.locator("input[type=submit]").click();
  await expect(page.locator(`a >> text='${taskName}'`)).toHaveText(taskName);
});