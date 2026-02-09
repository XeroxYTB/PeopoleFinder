import fetch from "node-fetch";

export async function searchINSEE(lieu) {
  if (!lieu) return [];

  const url = `https://geo.api.gouv.fr/communes?nom=${lieu}`;
  const res = await fetch(url);
  return await res.json();
}
