import express from "express";
import cors from "cors";
import universities from "./api/universities.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/universities", universities);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

export default app;
