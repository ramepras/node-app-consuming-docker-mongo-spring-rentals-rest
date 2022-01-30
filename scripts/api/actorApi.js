import "whatwg-fetch";

import { actorUrl } from "./baseUrl";

/* eslint-disable no-console */

const baseUrl = actorUrl;
export function getActors() {
  return get();
}

function get() {
  console.log("actor url here: "+baseUrl);
  return fetch(baseUrl).then(onSuccess, onError);
}


function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error);
}
