import express from "express";
import { searchINSEE } from "../services/insee.js";
import { searchDataGouv } from "../services/datagouv.js";
import { searchGallica } from "../services/gallica.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { nom, prenom, lieu } = req.body;

  const results = {
    insee: await searchINSEE(lieu),
    datagouv: await searchDataGouv(nom),
    gallica: await searchGallica(nom, prenom)
  };

  res.json(results);
});

export default router;
