import fetch from "node-fetch";

export async function searchGallica(nom, prenom) {
  if (!nom) return [];

  const query = encodeURIComponent(`${nom} ${prenom || ""}`);
  const url = `https://gallica.bnf.fr/SRU?version=1.2&operation=searchRetrieve&query=${query}`;

  return {
    lien: `https://gallica.bnf.fr/services/engine/search/sru?query=${query}`
  };
}
