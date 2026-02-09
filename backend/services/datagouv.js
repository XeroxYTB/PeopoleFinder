import fetch from "node-fetch";

export async function searchDataGouv(nom) {
  if (!nom) return [];

  const url = `https://www.data.gouv.fr/api/1/datasets/?q=${nom}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data.slice(0, 5);
}
