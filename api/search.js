export default async function handler(req, res) {
  const { nom, prenom, lieu } = req.body || {};

  const results = {
    insee: lieu
      ? await fetch(`https://geo.api.gouv.fr/communes?nom=${lieu}`).then(r => r.json())
      : [],
    datagouv: nom
      ? await fetch(`https://www.data.gouv.fr/api/1/datasets/?q=${nom}`).then(r => r.json())
      : [],
    gallica: nom
      ? `https://gallica.bnf.fr/services/engine/search/sru?query=${encodeURIComponent(nom + " " + (prenom || ""))}`
      : null
  };

  res.status(200).json(results);
}
