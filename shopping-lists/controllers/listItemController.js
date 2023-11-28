import * as listItemService from "../services/ListItemService.js";
import * as requestUtils from "../utils/requestUtils.js";

const createListItem = async (request) => {
    const formData = await request.formData();
  const name = formData.get("name");
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  
  await listItemService.createItem(name, urlParts[2]);

  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};

const collectListItem = async (request) => {
    const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  await listItemService.CollectItem(urlParts[4]);

  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
}


export { createListItem, collectListItem };