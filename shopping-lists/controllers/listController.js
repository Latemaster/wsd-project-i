import { renderFile } from "https://deno.land/x/eta@v2.2.0/mod.ts";
import * as listService from "../services/listService.js";
import * as listItemService from "../services/ListItemService.js"; 
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const viewStatistics = async (request) => {
  
  const data = {
    itemCount: await listItemService.findItemCount(),
    listCount: await listService.findListCount()
  }
  
  return new Response(await renderFile("mainpage.eta", data), responseDetails);
};

const addList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const formData = await request.formData();
  const name = formData.get("name");
  await listService.createList(name, urlParts[2]);

  return requestUtils.redirectTo("/lists");
};

const viewList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");

  const data = {
    currentList: await listService.findCurrentList(urlParts[2]),
    listItems: await listItemService.findActiveItemsByID(urlParts[2]),
    collectedListItems: await listItemService.findCollectedItemsByID(urlParts[2])
  };

  return new Response(await renderFile("list.eta", data), responseDetails);
};

const viewLists = async (request) => {

  const data = {
    lists: await listService.findAllActiveLists(),
  };

  return new Response(await renderFile("lists.eta", data), responseDetails);
};

const deactivateList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  
  await listService.deactivateList(urlParts[2])

  return requestUtils.redirectTo("/lists");
}

export { addList, viewLists, viewList, viewStatistics, deactivateList };