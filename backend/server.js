import express from "express";
import cors from "cors";
import searchRoute from "./routes/search.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/search", searchRoute);

app.listen(3000, () => {
  console.log("✅ API démarrée sur http://localhost:3000");
});
