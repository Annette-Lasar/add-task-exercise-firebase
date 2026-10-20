import { url } from "./general-data.js";

export async function getData(node) {
  const response = await fetch(url + `${node}.json`);
  const data = await response.json();
  return data;
}

export async function sendData(node, data) {
  const response = await fetch(url + `${node}.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
}
