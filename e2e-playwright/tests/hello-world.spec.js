const { test, expect } = require("@playwright/test");

//Tests the adding of a shopping list
test("Can add a shopping list", async ({page}) => {
  await page.goto("/lists");
  //create listname
  const listName = `My list: ${Math.random()}`;
  //find list submit button with id addList and click it
  await page.locator("input[type=text]").type(listName);
  await page.locator("#addList").click();
  //Check if a element has the listName
  await expect(page.locator(`a >> text='${listName}'`)).toHaveText(listName);
});

//Tests if we can show the page of single list
test("show single shopping list", async ({page}) => {
  await page.goto("/lists");
  //create listname
  const listName = `My list: ${Math.random()}`;
  //find list submit button with id addList and click it
  await page.locator("input[type=text]").type(listName);
  await page.locator("#addList").click();
  //find single list link and click it
  await page.locator(`ul >> text='${listName}'`).click()
  //Check if the current page has the header of the listname
  await expect(page.locator("h1")).toHaveText(listName);
});

//Tests if we can add item to shopping list
test("Can add a item to shopping list", async ({page}) => {
  await page.goto("/lists");
  //create listname
  const listName = `My list: ${Math.random()}`;
  //find list submit button with id addList and click it
  await page.locator("input[type=text]").type(listName);
  await page.locator("#addList").click();
  //find single list link and click it
  await page.locator(`ul >> text='${listName}'`).click();
  //create itemName
  const ItemName = `My Item: ${Math.random()}`;
  //find Item submit button with id AddItem and click it
  await page.locator("input[type=text]").type(ItemName);
  await page.locator("#AddItem").click();
  //Check if li element wiht the Itemname has the text "Item name Mark collected!" 
  await expect(page.locator(`li >> text='${ItemName}'`)).toHaveText(`${ItemName} Mark collected!`);
});

//Tests if we can collect item
test("Can collect item", async ({page}) => {
  await page.goto("/lists");
  //create listname
  const listName = `My list: ${Math.random()}`;
   //find list submit button with id addList and click it
  await page.locator("input[type=text]").type(listName);
  await page.locator("#addList").click();
    //find single list link and click it
  await page.locator(`ul >> text='${listName}'`).click();
   //create itemName
  const ItemName = `My Item: ${Math.random()}`;
  //find Item submit button with id AddItem and click it
  await page.locator("input[type=text]").type(ItemName);
  await page.locator("#AddItem").click();
  //find Item submit button with id Collect and click it, this markes the item collected value as true
  await page.locator("#Collect").click();
  //Check if the the name of the item appears in the del object, where we list the collected items
  await expect(page.locator(`del >> text='${ItemName}'`)).toHaveText(`${ItemName}`);
});

//Tests if we can deacticate list
test("Can deactivate shopping list", async ({page}) => {
  await page.goto("/lists");
  //create listname
  const listName = `My list: ${Math.random()}`;
  //find list submit button with id addList and click it
  await page.locator("input[type=text]").type(listName);
  await page.locator("#addList").click();
  //Check if a element has the listName
  await expect(page.locator(`a >> text='${listName}'`)).toHaveText(listName);
  //find li element with the created listname and click it, this will change the value of active to false  
  await page.locator(`li >> text='${listName}'`).click();
  //check if the element a with the listname that existed before the click exists now.  
  await expect(page.locator(`a >> text='${listName}'`)).toBeHidden();
});

